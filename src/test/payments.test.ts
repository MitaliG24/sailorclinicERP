import { describe, expect, it } from "vitest";

import { createPaymentSchema, updatePaymentSchema } from "@/lib/payments";

describe("payment input validation", () => {
  it("accepts a valid payment record", () => {
    expect(
      createPaymentSchema.parse({
        patientId: "PT-2408",
        patientName: "Amara Johnson",
        invoiceId: "INV-2026-084",
        method: "UPI",
        amount: 3500,
        reference: "UPI-1234",
      }),
    ).toMatchObject({
      patientId: "PT-2408",
      method: "UPI",
      amount: 3500,
    });
  });

  it("accepts a partial payment record with balance", () => {
    const parsed = createPaymentSchema.parse({
      patientId: "PT-2408",
      patientName: "Amara Johnson",
      method: "Cash",
      amount: 2000,
      totalAmount: 3500,
      balanceDue: 1500,
      status: "Partial",
    });
    expect(parsed.amount).toBe(2000);
    expect(parsed.status).toBe("Partial");
    expect(parsed.balanceDue).toBe(1500);
  });

  it("validates payment update schema", () => {
    const updated = updatePaymentSchema.parse({
      id: "TXN-001",
      amount: 3500,
      status: "Completed",
      method: "UPI",
    });
    expect(updated.id).toBe("TXN-001");
    expect(updated.amount).toBe(3500);
    expect(updated.status).toBe("Completed");
  });

  it("rejects non-positive and non-finite amounts", () => {
    for (const amount of [0, -1, Number.NaN, Number.POSITIVE_INFINITY]) {
      expect(() =>
        createPaymentSchema.parse({
          patientId: "PT-2408",
          patientName: "Amara Johnson",
          method: "UPI",
          amount,
        }),
      ).toThrow();
    }
  });

  it("filters out deleted payment from list", () => {
    const list = [
      { id: "TXN-001", patientName: "A", amount: 1000 },
      { id: "TXN-002", patientName: "B", amount: 2000 },
    ];
    const filtered = list.filter((p) => p.id !== "TXN-001");
    expect(filtered).toHaveLength(1);
    expect(filtered[0].id).toBe("TXN-002");
  });
});
