import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { PaymentRecord } from "@/lib/payments";
import { PaymentReceiptDocument } from "./PaymentReceiptDocument";

interface PaymentReceiptModalProps {
  payment: PaymentRecord | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PaymentReceiptModal({
  payment,
  open,
  onOpenChange,
}: PaymentReceiptModalProps) {
  if (!payment) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[94vh] w-full max-w-3xl overflow-y-auto p-4 sm:p-6 sm:rounded-xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Payment Receipt {payment.id}</DialogTitle>
          <DialogDescription>
            Official DG Shipping Marine Medical Examination Payment Receipt
          </DialogDescription>
        </DialogHeader>

        <PaymentReceiptDocument
          payment={payment}
          onClose={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

