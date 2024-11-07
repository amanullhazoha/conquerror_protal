// User name card
export const InfoCard = ({ title, content, className }) => {
  return (
    <div className={`border-b-2 border-b-[#F9FAFB] pb-4 mb-4 ${className}`}>
      <p className="text-[#9CA3AF] pb-2">{title}</p>

      <p>{content ? content : "Null"}</p>
    </div>
  );
};

import GreenCheck from "@/assets/icons/GreenCheck";

// User name card
export const InfoEmailCard = ({ title, content, className, status }) => {
  return (
    <div className={`border-b-2 border-b-[#F9FAFB] pb-4 mb-4 ${className}`}>
      <p className="text-[#9CA3AF] pb-2">{title}</p>

      <div className="flex items-center justify-between">
        <p>{content ? content : "Null"}</p>
        {status && <GreenCheck />}
      </div>
    </div>
  );
};
