const ButtonV2 = ({ text, icon, className }) => {
  return (
    <button
      className={`mr-4 p-[11px_16px] text-gray-900 text-sm border-[1px] border-gray-300 rounded-full flex items-center justify-between gap-x-3 ${className}`}
    >
      {text} {icon}
    </button>
  );
};

export default ButtonV2;
