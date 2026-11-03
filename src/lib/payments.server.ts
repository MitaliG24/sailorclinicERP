import { createServerFn } from "@tanstack/react-start";

import { getDatabase } from "@/lib/mongodb.server";
import {
  createPaymentSchema,
  updatePaymentSchema,
  type PaymentRecord,
  type UpdatePaymentInput,
} from "@/lib/payments";

export const listPayments = createServerFn({ method: "GET" }).handler(
  async (): Promise<PaymentRecord[]> => {
    try {
      const db = await getDatabase();
      const rawPayments = await db
        .collection("payments")
        .find({}, { projection: { _id: 0 } })
        .sort({ date: -1 })
        .limit(500)
        .toArray();

      // Return clean, plain objects without any MongoDB BSON symbols or ObjectId
      return rawPayments.map((p) => ({
        id: String(p.id || ""),
        patientId: String(p.patientId || ""),
        patientName: String(p.patientName || ""),
        ...(p.invoiceId ? { invoiceId: String(p.invoiceId) } : {}),
        method: p.method as PaymentRecord["method"],
        amount: Number(p.amount || 0),
        totalAmount: Number(p.totalAmount || p.amount || 3500),
        balanceDue: Number(p.balanceDue || 0),
        ...(p.reference ? { reference: String(p.reference) } : {}),
        date: String(p.date || new Date().toISOString()),
        status: (p.status || "Completed") as PaymentRecord["status"],
        ...(p.rank ? { rank: String(p.rank) } : {}),
        ...(p.vessel ? { vessel: String(p.vessel) } : {}),
        ...(p.indosNo ? { indosNo: String(p.indosNo) } : {}),
        ...(p.cdcNo ? { cdcNo: String(p.cdcNo) } : {}),
      }));
    } catch (error) {
      console.error("Failed to fetch payments from MongoDB:", error);
      return [];
    }
  },
);

type RecordPaymentInput = {
  patientId: string;
  patientName: string;
  invoiceId?: string;
  method?: (typeof import("@/lib/payments").paymentMethods)[number];
  amount: number;
  totalAmount?: number;
  balanceDue?: number;
  reference?: string;
  status?: (typeof import("@/lib/payments").paymentStatuses)[number];
  rank?: string;
  vessel?: string;
  indosNo?: string;
  cdcNo?: string;
};

type RecordPaymentResult =
  | { success: true; payment: PaymentRecord }
  | { success: false; message: string };

export const recordPayment = createServerFn({ method: "POST" })
  .validator((input: unknown): RecordPaymentInput => input as RecordPaymentInput)
  .handler(async ({ data }): Promise<RecordPaymentResult> => {
    try {
      const parsed = createPaymentSchema.safeParse(data);
      if (!parsed.success) {
        return {
          success: false,
          message: "Payment details are invalid. Check the selected patient, payment method, and amount.",
        };
      }

      const validatedData = parsed.data;
      const db = await getDatabase();
      const payment: PaymentRecord = {
        ...validatedData,
        id: `TXN-${crypto.randomUUID().slice(0, 8).toUpperCase()}`,
        date: new Date().toISOString(),
        status: validatedData.status || "Completed",
        totalAmount: validatedData.totalAmount || 3500,
        balanceDue: validatedData.balanceDue ?? Math.max(0, (validatedData.totalAmount || 3500) - validatedData.amount),
      };

      // Clone object so MongoDB driver's internal _id mutation does not attach ObjectId to payment
      await db.collection("payments").insertOne({ ...payment });

      // If payment is linked to an invoice, mark the invoice as Paid in MongoDB
      if (payment.invoiceId) {
        try {
          await db.collection("invoices").updateOne(
            { id: payment.invoiceId },
            {
              $set: {
                status: payment.status === "Completed" ? "Paid" : "Pending",
                paymentMethod: payment.method,
                transactionRef: payment.id,
                paidDate: new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }),
              },
            },
          );
        } catch (invoiceErr) {
          console.warn("Could not auto-update invoice status in MongoDB:", invoiceErr);
        }
      }

      // Record activity in MongoDB activity log
      try {
        await db.collection("activity_logs").insertOne({
          user: "Clinic Reception",
          action: `Recorded ${payment.status.toLowerCase()} payment`,
          subject: `${payment.id} · ₹${payment.amount.toLocaleString("en-IN")} (${payment.patientName})`,
          time: "Just now",
          kind: "Payments",
          timestamp: new Date().toISOString(),
        });
      } catch (actErr) {
        console.warn("Could not log payment activity in MongoDB:", actErr);
      }

      const safePayment: PaymentRecord = {
        id: payment.id,
        patientId: payment.patientId,
        patientName: payment.patientName,
        ...(payment.invoiceId ? { invoiceId: payment.invoiceId } : {}),
        method: payment.method,
        amount: payment.amount,
        totalAmount: payment.totalAmount,
        balanceDue: payment.balanceDue,
        ...(payment.reference ? { reference: payment.reference } : {}),
        date: payment.date,
        status: payment.status,
        ...(payment.rank ? { rank: payment.rank } : {}),
        ...(payment.vessel ? { vessel: payment.vessel } : {}),
        ...(payment.indosNo ? { indosNo: payment.indosNo } : {}),
        ...(payment.cdcNo ? { cdcNo: payment.cdcNo } : {}),
      };

      return { success: true, payment: safePayment };
    } catch (error) {
      console.error("MongoDB failed to record clinic payment.", error);
      return { success: false, message: getPaymentSaveErrorMessage(error) };
    }
  });

type UpdatePaymentResult =
  | { success: true; payment: PaymentRecord }
  | { success: false; message: string };

export const updatePayment = createServerFn({ method: "POST" })
  .validator((input: unknown): UpdatePaymentInput => input as UpdatePaymentInput)
  .handler(async ({ data }): Promise<UpdatePaymentResult> => {
    try {
      const parsed = updatePaymentSchema.safeParse(data);
      if (!parsed.success) {
        return {
          success: false,
          message: "Payment update details are invalid.",
        };
      }

      const validated = parsed.data;
      const db = await getDatabase();
      const existing = await db.collection("payments").findOne({ id: validated.id });
      if (!existing) {
        return { success: false, message: "Payment transaction not found." };
      }

      const updatedRecord: PaymentRecord = {
        id: existing.id,
        patientId: validated.patientId || existing.patientId,
        patientName: validated.patientName || existing.patientName,
        method: validated.method || existing.method,
        amount: validated.amount !== undefined ? validated.amount : Number(existing.amount || 0),
        totalAmount: validated.totalAmount !== undefined ? validated.totalAmount : Number(existing.totalAmount || 3500),
        balanceDue: validated.balanceDue !== undefined ? validated.balanceDue : Number(existing.balanceDue || 0),
        reference: validated.reference !== undefined ? validated.reference : existing.reference,
        date: existing.date,
        status: validated.status || existing.status || "Completed",
        rank: validated.rank || existing.rank,
        vessel: validated.vessel || existing.vessel,
        indosNo: validated.indosNo || existing.indosNo,
        cdcNo: validated.cdcNo || existing.cdcNo,
      };

      await db.collection("payments").updateOne(
        { id: validated.id },
        {
          $set: {
            method: updatedRecord.method,
            amount: updatedRecord.amount,
            totalAmount: updatedRecord.totalAmount,
            balanceDue: updatedRecord.balanceDue,
            reference: updatedRecord.reference,
            status: updatedRecord.status,
            updatedAt: new Date().toISOString(),
          },
        },
      );

      try {
        await db.collection("activity_logs").insertOne({
          user: "Clinic Reception",
          action: "Updated payment record",
          subject: `${updatedRecord.id} · ₹${updatedRecord.amount.toLocaleString("en-IN")} (${updatedRecord.status})`,
          time: "Just now",
          kind: "Payments",
          timestamp: new Date().toISOString(),
        });
      } catch (actErr) {
        console.warn("Could not log payment update activity in MongoDB:", actErr);
      }

      return { success: true, payment: updatedRecord };
    } catch (error) {
      console.error("Failed to update payment in MongoDB:", error);
      return { success: false, message: getPaymentSaveErrorMessage(error) };
    }
  });

export const deletePayment = createServerFn({ method: "POST" })
  .validator((input: unknown): { id: string } => {
    if (typeof input === "object" && input !== null && "id" in input && typeof (input as { id: unknown }).id === "string") {
      return { id: (input as { id: string }).id };
    }
    throw new Error("Invalid payment ID.");
  })
  .handler(async ({ data }): Promise<{ success: boolean; message?: string }> => {
    try {
      const db = await getDatabase();
      const existing = await db.collection("payments").findOne({ id: data.id });
      await db.collection("payments").deleteOne({ id: data.id });

      try {
        await db.collection("activity_logs").insertOne({
          user: "Clinic Admin",
          action: "Deleted payment record",
          subject: `${data.id}${existing?.amount ? ` · ₹${Number(existing.amount).toLocaleString("en-IN")}` : ""}`,
          time: "Just now",
          kind: "Payments",
          timestamp: new Date().toISOString(),
        });
      } catch (actErr) {
        console.warn("Could not log payment deletion in MongoDB:", actErr);
      }

      return { success: true };
    } catch (error) {
      console.error("Failed to delete payment from MongoDB:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Failed to delete payment.",
      };
    }
  });

function getPaymentSaveErrorMessage(error: unknown): string {
  const message = error instanceof Error ? error.message : "";
  const code = (error as { code?: number } | null)?.code;

  if (error && typeof error === "object" && "issues" in error) {
    return "Payment details are invalid. Check the selected patient, payment method, and amount.";
  }

  if (/Missing MONGODB_URI/.test(message)) {
    return "Payment storage is not configured. Set MONGODB_URI on the server and restart the app.";
  }

  if (code === 13 || code === 18 || /authentication failed|not authorized/i.test(message)) {
    return "MongoDB rejected the connection. Check the Atlas database username, password, and permissions.";
  }

  if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT|Server selection timed out|network|TLS/i.test(message)) {
    return "MongoDB could not be reached. Check the Atlas network access list and server connection.";
  }

  return "MongoDB could not save this payment. Check the server log for the database error.";
}
