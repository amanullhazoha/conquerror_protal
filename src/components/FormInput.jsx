import React from 'react';

const FormInput = React.forwardRef(({
  label,
  type,
  placeholder,
  value,
  className,
  isEdit = false,
  ...rest
}, ref) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formattedValue = type === "date" && value ? formatDate(value) : value;

  return (
    <div className={className}>
      <label
        htmlFor=""
        className={`text-[12px] font-medium text-gray-400 inline-block ${
          isEdit && "text-gray-900 text-sm mb-2"
        }`}
      >
        {label} {isEdit && <sup className="text-red-500">*</sup>}
      </label>{" "}
      <br />
      {isEdit ? (
        <input
          ref={ref}
          className="h-[37px] w-full rounded-[8px] p-[8px_16px] focus:outline-primary-600 outline-[1px] border-[1px] border-gray-300 bg-gray-50 text-sm"
          type={type ? type : "text"}
          placeholder={placeholder}
          defaultValue={formattedValue}
          {...rest}
        />
      ) : (
        <h4 className="text-gray-900 text-sm mt-3">{value}</h4>
      )}
    </div>
  );
});

// Set display name for better debugging
FormInput.displayName = "FormInput";

export default FormInput;
