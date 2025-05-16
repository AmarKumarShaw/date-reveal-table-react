import { cn } from '../utils/cn';

const ContactAvatar = ({ initials, className }) => {
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