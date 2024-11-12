import { Field, ErrorMessage } from "formik";

const FileInputField = ({
  label,
  name,
  errors,
  touched,
  placeholder,
  required = false,
}) => {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-[#27303F] font-medium">
        {label} {required && <span className="text-[#F04438]">*</span>}
      </label>

      <Field
        id={name}
        type="file"
        name={name}
        placeholder={placeholder}
        error={touched[name] && errors[name]}
        className={`border border-[#D1D5DB] bg-[#F9FAFB] rounded-lg w-full px-4 py-3 text-sm text-[#27303F] outline-none mt-2
                ${touched?.[name] && errors?.[name] ? "border-red-500" : ""}`}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

export default FileInputField;
