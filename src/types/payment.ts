
export type PaymentStatus = 'Active' | 'Processing' | 'Paid' | 'Overdue' | 'Expired' | 'Canceled';

export interface PaymentRequest {
  id: string;
  createdOn: Date;
  contact: {
    initials: string;
    name: string;
  };
  amount: number;
  status: PaymentStatus;
  account: string;
}
