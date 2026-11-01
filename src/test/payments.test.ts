import { describe, expect, it } from "vitest";

import { createPaymentSchema } from "@/lib/payments";

describe("payment input validation", () => {
  it("accepts a valid payment record", () => {
    expect(
      createPaymentSchema.parse({
        patientId: "PT-2408",
        patientName: "Amara Johnson",
        invoiceId: "INV-2026-084",
        method: "UPI",
        amount: 4500,
        reference: "UPI-1234",
      }),
    ).toMatchObject({
      patientId: "PT-2408",
      method: "UPI",
      amount: 4500,
    });
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
