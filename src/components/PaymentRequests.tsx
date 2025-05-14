
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PaymentRequestsTable from "./PaymentRequestsTable";
import { PaymentRequest } from '@/types/payment';

const PaymentRequests: React.FC = () => {
  // Mock data for the table
  const mockRequests: PaymentRequest[] = [
    {
      id: '1',
      createdOn: new Date('2023-04-30'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Active',
      account: 'Ops / Payroll'
    },
    {
      id: '2',
      createdOn: new Date('2023-04-30'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Processing',
      account: 'Ops / Payroll'
    },
    {
      id: '3',
      createdOn: new Date('2023-04-30'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Paid',
      account: 'Ops / Payroll'
    },
    {
      id: '4',
      createdOn: new Date('2023-04-29'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Overdue',
      account: 'Ops / Payroll'
    },
    {
      id: '5',
      createdOn: new Date('2023-04-29'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Expired',
      account: 'Ops / Payroll'
    },
    {
      id: '6',
      createdOn: new Date('2023-04-28'),
      contact: { initials: 'CB', name: 'Charles Bonito' },
      amount: 10000.00,
      status: 'Canceled',
      account: 'Ops / Payroll'
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-full">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Requests</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Request Payment
        </Button>
      </div>
      <PaymentRequestsTable requests={mockRequests} />
    </div>
  );
};

export default PaymentRequests;
