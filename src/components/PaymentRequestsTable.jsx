import { useState, useEffect } from 'react';
import StatusBadge from './StatusBadge';
import ContactAvatar from './ContactAvatar';
import { formatCurrency, formatDate } from '../utils/formatters';

const PaymentRequestsTable = ({ requests }) => {
  const [hoveredRowId, setHoveredRowId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const shouldShowDate = (currentDate, index) => {
    if (index === 0) return true;
    const prevDate = requests[index - 1].createdOn;
    return currentDate.toDateString() !== prevDate.toDateString();
  };

  return (
    <div className="w-full overflow-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-white">
          <tr>
            <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500">
              Created on
            </th>
            <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500">
              Contact
            </th>
            <th className="px-2 sm:px-6 py-3 text-right text-xs sm:text-sm font-medium text-gray-500">
              Amount
            </th>
            <th className="px-2 sm:px-6 py-3 text-center text-xs sm:text-sm font-medium text-gray-500">
              Status
            </th>
            {!isMobile && (
              <th className="px-2 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500">
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
                    <div className={`text-xs sm:text-sm text-gray-700 absolute top-0 left-0 transform transition-opacity duration-300 ease-in-out ${
                      isDateVisible ? 'opacity-100' : 'opacity-0'
                    }`}>
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
  );
};

export default PaymentRequestsTable;