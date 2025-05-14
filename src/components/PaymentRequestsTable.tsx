
import React, { useState } from 'react';
import { PaymentRequest } from '@/types/payment';
import StatusBadge from './StatusBadge';
import ContactAvatar from './ContactAvatar';
import { formatCurrency } from '@/utils/formatters';

interface PaymentRequestsTableProps {
  requests: PaymentRequest[];
}

const PaymentRequestsTable: React.FC<PaymentRequestsTableProps> = ({ requests }) => {
  const [hoveredRowId, setHoveredRowId] = useState<string | null>(null);

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
    <div className="w-full overflow-x-auto">
      <div className="container mx-auto max-w-full">
        <div className="flex flex-col">
          <div className="min-w-full">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Created on
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-4 text-right text-sm font-medium text-gray-500">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Account
                    </th>
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
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {isDateVisible && (
                            <div className="text-sm text-gray-700">
                              {formatDate(request.createdOn)}
                            </div>
                          )}
                          {!isDateVisible && (
                            <div className="h-5"></div> // Empty div to maintain row height
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <ContactAvatar initials={request.contact.initials} />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {request.contact.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                          {formatCurrency(request.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <StatusBadge status={request.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {request.account}
                        </td>
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
