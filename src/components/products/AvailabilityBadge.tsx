import { AVAILABILITY, AvailabilityStatus } from "./availability";

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  className?: string;
}

const AvailabilityBadge = ({ status, className = "" }: AvailabilityBadgeProps) => {
  const meta = AVAILABILITY[status];
  return (
    <span
      className={`inline-flex items-center px-4 py-1.5 rounded-full border-2 text-base md:text-lg font-bold whitespace-nowrap ${meta.badgeClass} ${className}`}
    >
      {meta.badge}
    </span>
  );
};

export default AvailabilityBadge;
