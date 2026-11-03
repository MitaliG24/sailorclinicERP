import { z } from "zod";

export const paymentMethods = [
  "Cash",
  "UPI",
  "Bank Transfer",
  "Card",
  "Cheque",
] as const;

export const paymentStatuses = [
  "Completed",
  "Partial",
  "Pending",
] as const;

export const createPaymentSchema = z.object({
  patientId: z.string().trim().min(1).max(80),
  patientName: z.string().trim().min(1).max(160),
  invoiceId: z.string().trim().max(80).optional(),
  method: z.enum(paymentMethods).default("UPI"),
  amount: z.number().finite().positive().max(10_000_000),
  totalAmount: z.number().finite().positive().max(10_000_000).optional(),
  balanceDue: z.number().finite().nonnegative().max(10_000_000).optional(),
  reference: z.string().trim().max(120).optional(),
  status: z.enum(paymentStatuses).default("Completed"),
  rank: z.string().trim().max(120).optional(),
  vessel: z.string().trim().max(120).optional(),
  indosNo: z.string().trim().max(80).optional(),
  cdcNo: z.string().trim().max(80).optional(),
});

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;

export const updatePaymentSchema = z.object({
  id: z.string().trim().min(1),
  patientId: z.string().trim().min(1).optional(),
  patientName: z.string().trim().min(1).optional(),
  method: z.enum(paymentMethods).optional(),
  amount: z.number().finite().nonnegative().max(10_000_000).optional(),
  totalAmount: z.number().finite().positive().max(10_000_000).optional(),
  balanceDue: z.number().finite().nonnegative().max(10_000_000).optional(),
  reference: z.string().trim().max(120).optional(),
  status: z.enum(paymentStatuses).optional(),
  rank: z.string().trim().max(120).optional(),
  vessel: z.string().trim().max(120).optional(),
  indosNo: z.string().trim().max(80).optional(),
  cdcNo: z.string().trim().max(80).optional(),
});

export type UpdatePaymentInput = z.infer<typeof updatePaymentSchema>;

export type PaymentRecord = {
  id: string;
  patientId: string;
  patientName: string;
  invoiceId?: string | undefined;
  method: (typeof paymentMethods)[number];
  amount: number;
  totalAmount?: number | undefined;
  balanceDue?: number | undefined;
  reference?: string | undefined;
  date: string;
  status: (typeof paymentStatuses)[number];
  rank?: string | undefined;
  vessel?: string | undefined;
  indosNo?: string | undefined;
  cdcNo?: string | undefined;
};
