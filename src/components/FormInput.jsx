const FormInput = ({
  label,
  type,
  placeholder,
  value,
  className,
  isEdit = false,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
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
          className="h-[37px] w-full rounded-[8px] p-[8px_16px] focus:outline-primary-600 outline-[1px] border-[1px] border-gray-300 bg-gray-50 text-sm"
          type={type ? type : "text"}
          placeholder={placeholder}
          defaultValue={formattedValue}
        />
      ) : (
        <h4 className="text-gray-900 text-sm mt-3">{value}</h4>
      )}
    </div>
  );
};

export default FormInput;
