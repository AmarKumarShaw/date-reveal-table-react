import { cn } from '../utils/cn';

const statusMap = {
  'Active': { bg: 'bg-status-active', text: 'text-statusText-active' },
  'Processing': { bg: 'bg-status-processing', text: 'text-statusText-processing' },
  'Paid': { bg: 'bg-status-paid', text: 'text-statusText-paid' },
  'Overdue': { bg: 'bg-status-overdue', text: 'text-statusText-overdue' },
  'Expired': { bg: 'bg-status-expired', text: 'text-statusText-expired' },
  'Canceled': { bg: 'bg-status-canceled', text: 'text-statusText-canceled' },
};

const StatusBadge = ({ status, className }) => {
  const { bg, text } = statusMap[status] || {};

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