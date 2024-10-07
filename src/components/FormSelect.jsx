import ArrowDown from "@/assets/icons/ArrowDown";

const SelectBox = ({ isEdit, label, value, options, className }) => {
  return (
    <div className={`${className} w-full max-w-xs`}>
      <label
        htmlFor=""
        className={`text-[12px] font-medium text-gray-400 inline-block ${
          isEdit && "text-gray-900 text-sm mb-2"
        }`}
      >
        {label} {isEdit && <sup className="text-red-500">*</sup>}
      </label>{" "}
      {isEdit ? (
        <div className="mt-1 relative w-full">
          <select
            id="nationality"
            name="nationality"
            className="block appearance-none bg-gray-50 w-full pl-3 pr-10 py-2 text-base border-[1px] focus:border-[2px] border-gray-300 focus:outline-none focus:ring-primary-700 focus:border-primary-700 sm:text-sm rounded-md"
          >
            {options?.map((option, i) => (
              <option key={i}>{option}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ArrowDown className="w-[10px] h-[10px]" />
          </div>
        </div>
      ) : (
        <h4 className="text-gray-900 text-sm mt-3">{value}</h4>
      )}
    </div>
  );
};

export default SelectBox;
