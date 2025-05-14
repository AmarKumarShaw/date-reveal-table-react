
import React from 'react';
import { cn } from '@/lib/utils';
import { PaymentStatus } from '@/types/payment';

interface StatusBadgeProps {
  status: PaymentStatus;
  className?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  const statusMap: Record<PaymentStatus, { bg: string; text: string }> = {
    'Active': { bg: 'bg-status-active', text: 'text-statusText-active' },
    'Processing': { bg: 'bg-status-processing', text: 'text-statusText-processing' },
    'Paid': { bg: 'bg-status-paid', text: 'text-statusText-paid' },
    'Overdue': { bg: 'bg-status-overdue', text: 'text-statusText-overdue' },
    'Expired': { bg: 'bg-status-expired', text: 'text-statusText-expired' },
    'Canceled': { bg: 'bg-status-canceled', text: 'text-statusText-canceled' },
  };

  const { bg, text } = statusMap[status];

  return (
    <span className={cn(
      'inline-block rounded-md px-3 py-1 text-sm font-medium',
      bg,
      text,
      className
    )}>
      {status}
    </span>
  );
};

export default StatusBadge;
