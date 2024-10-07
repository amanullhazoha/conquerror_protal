import CheckMarkIcon from "@/assets/icons/CheckMarkIcon";

const RadioInput = ({
  label,
  value,
  options = [],
  isEdit = false,
  className,
}) => {
  return (
    <div className={className}>
      <label
        className={`text-[12px] font-medium text-gray-400 inline-block ${
          isEdit && "text-gray-900 text-sm mb-2"
        }`}
      >
        {label} {isEdit && <sup className="text-red-500">*</sup>}
      </label>
      <br />
      {isEdit ? (
        <div className="flex items-center space-x-4 mt-2">
          {options.map((option, index) => (
            <label
              key={index}
              htmlFor={option.value}
              className="flex items-center cursor-pointer"
            >
              <input
                type="radio"
                id={option.value}
                name={label}
                value={option.value}
                defaultChecked={option.value === value}
                className="hidden peer"
              />
              <CheckMarkIcon />
              <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center peer-checked:hidden"></div>
              <span className="ml-2 text-gray-900 text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      ) : (
        <h4 className="text-gray-900 text-sm mt-3 capitalize">{value}</h4>
      )}
    </div>
  );
};

export default RadioInput;
