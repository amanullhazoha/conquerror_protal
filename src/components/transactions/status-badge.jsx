import { cn } from "@/lib/utils";
import PropTypes from 'prop-types';


export function StatusBadge({
  status,
  className
}) {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Hold":
        return "bg-red-50 text-red-500 before:bg-red-500"
      case "Deposit":
        return "bg-green-50 text-green-500 before:bg-green-500"
      case "Send for credit":
        return "bg-[#FFF7E9] text-[#FDB022] before:bg-[#FDB022]"
      default:
        return "bg-gray-50 text-gray-500 before:bg-gray-500"
    }
  }

  return (
    (<span
      className={cn(
        "relative inline-flex items-center rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap",
        "before:mr-2 before:h-1.5 before:w-1.5 before:rounded-full",
        getStatusStyles(status),
        className
      )}>
      {status}
    </span>)
  );
}


StatusBadge.propTypes = {
  status: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
