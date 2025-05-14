
import React from 'react';
import { cn } from '@/lib/utils';

interface ContactAvatarProps {
  initials: string;
  className?: string;
}

const ContactAvatar: React.FC<ContactAvatarProps> = ({ initials, className }) => {
  return (
    <div className={cn(
      'flex items-center justify-center w-9 h-9 rounded-full bg-gray-200 text-gray-600 text-sm',
      className
    )}>
      {initials}
    </div>
  );
};

export default ContactAvatar;
