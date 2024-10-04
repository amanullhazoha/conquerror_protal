const FormInput = ({ label, type, placeholder, value, isEdit = false }) => {
  return (
    <div>
      <label htmlFor="" className="text-[12px] font-medium text-gray-400 mb-2">
        {label} {isEdit && <sup className="text-red-500">*</sup>}
      </label>{" "}
      <br />
      {isEdit ? (
        <input
          className="h-[37px] rounded-[8px] p-[8px_16px] border focus:outline-primary-600"
          type={type ? type : "text"}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <h4 className="text-gray-900 text-sm mt-3">{value}</h4>
      )}
    </div>
  );
};

export default FormInput;
