import { AVAILABILITY, AvailabilityStatus } from "./availability";
import { cn } from "@/lib/utils";

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  /** "sm" = discreet inline badge (variant cards), "md" = product-level badge. */
  size?: "sm" | "md";
  className?: string;
}

const AvailabilityBadge = ({ status, size = "md", className = "" }: AvailabilityBadgeProps) => {
  const meta = AVAILABILITY[status];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-bold whitespace-nowrap",
        size === "sm" ? "px-3 py-1 text-sm md:text-base border" : "px-4 py-1.5 text-base md:text-lg border-2",
        meta.badgeClass,
        className,
      )}
    >
      {meta.badge}
    </span>
  );
};

export default AvailabilityBadge;

