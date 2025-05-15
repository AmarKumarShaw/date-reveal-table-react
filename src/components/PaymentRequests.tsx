
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
    <div className="w-full bg-white sm:bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 max-w-full">
        <div className="flex flex-wrap items-center justify-between mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-0">Requests</h1>
          <Button variant="outline" className="flex items-center gap-2 text-xs sm:text-sm">
            <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" /> Request Payment
          </Button>
        </div>
        <div className="bg-white sm:shadow-sm rounded-lg overflow-hidden">
          <PaymentRequestsTable requests={mockRequests} />
        </div>
      </div>
    </div>
  );
};

export default PaymentRequests;
