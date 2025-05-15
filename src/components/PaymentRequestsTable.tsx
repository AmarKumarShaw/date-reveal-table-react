
import React, { useState } from 'react';
import { PaymentRequest } from '@/types/payment';
import StatusBadge from './StatusBadge';
import ContactAvatar from './ContactAvatar';
import { formatCurrency } from '@/utils/formatters';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';
import { useIsMobile } from '@/hooks/use-mobile';

interface PaymentRequestsTableProps {
  requests: PaymentRequest[];
}

const PaymentRequestsTable: React.FC<PaymentRequestsTableProps> = ({ requests }) => {
  const [hoveredRowId, setHoveredRowId] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const shouldShowDate = (currentDate: Date, index: number): boolean => {
    // Show date if it's the first row
    if (index === 0) return true;
    
    // Show date if current date is different from previous date
    const prevDate = requests[index - 1].createdOn;
    
    const currentDateString = currentDate.toDateString();
    const prevDateString = prevDate.toDateString();
    
    return currentDateString !== prevDateString;
  };

  return (
    <div className="w-full overflow-auto">
      <div className="container px-0 sm:px-4 mx-auto max-w-full">
        <div className="flex flex-col">
          <div className="min-w-full">
            <div className="overflow-hidden sm:rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500">
                      Created on
                    </th>
                    <th scope="col" className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500">
                      Contact
                    </th>
                    <th scope="col" className="px-2 sm:px-6 py-3 text-right text-xs sm:text-sm font-medium text-gray-500">
                      Amount
                    </th>
                    <th scope="col" className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500">
                      Status
                    </th>
                    {!isMobile && (
                      <th scope="col" className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500">
                        Account
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {requests.map((request, index) => {
                    const isDateVisible = shouldShowDate(request.createdOn, index) || 
                                        hoveredRowId === request.id;
                                        
                    return (
                      <tr 
                        key={request.id}
                        onMouseEnter={() => setHoveredRowId(request.id)}
                        onMouseLeave={() => setHoveredRowId(null)}
                        className="hover:bg-gray-50 transition-colors duration-150"
                      >
                        <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                          <div className="h-5 relative">
                            <div 
                              className={`text-xs sm:text-sm text-gray-700 absolute top-0 left-0 transform transition-opacity duration-300 ease-in-out ${
                                isDateVisible ? 'opacity-100' : 'opacity-0'
                              }`}
                            >
                              {formatDate(request.createdOn)}
                            </div>
                          </div>
                        </td>
                        <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <ContactAvatar initials={request.contact.initials} />
                            <div className="ml-2 sm:ml-4">
                              <div className="text-xs sm:text-sm font-medium text-gray-900">
                                {request.contact.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-right text-xs sm:text-sm text-gray-900">
                          {formatCurrency(request.amount)}
                        </td>
                        <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-center">
                          <StatusBadge status={request.status} />
                        </td>
                        {!isMobile && (
                          <td className="px-2 sm:px-6 py-3 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">
                            {request.account}
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequestsTable;
