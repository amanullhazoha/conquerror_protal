import { useState } from "react";
import { Field, ErrorMessage } from "formik";

const InputTextareaField = ({
  name,
  label,
  errors,
  touched,
  className,
  placeholder,
  required = true,
}) => {
  const [inputError, setInputError] = useState("");

  return (
    <div>
      <label htmlFor={name} className="text-sm text-[#27303F] font-medium">
        {label} {required && <span className="text-[#F04438]">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${className} border border-[#D1D5DB] bg-[#F9FAFB] rounded-lg w-full px-4 py-3 text-sm text-[#27303F] outline-none mt-2
                ${touched[name] && errors[name] ? "border-red-500" : ""}`}
      ></textarea>

      {inputError && (
        <div className="text-red-500 text-xs mt-1">{inputError}</div>
      )}

      {!inputError && (
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-xs mt-1"
        />
      )}
    </div>
  );
};

export default InputTextareaField;
