import CameraIcon from "@/assets/icons/CameraIcon";
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

      <div className="flex gap-2 items-start mt-2">
        <div className="h-[104px] w-[104px] border border-[#D1D5DB] rounded-lg flex justify-center items-center">
          <CameraIcon />
        </div>

        <input
          hidden
          id={name}
          type="file"
          name={name}
          accept="image/*"
          placeholder={placeholder}
          className={`border border-[#D1D5DB] bg-[#F9FAFB] rounded-lg col-span-2 px-4 py-3 text-sm text-[#27303F] outline-none
                ${touched?.[name] && errors?.[name] ? "border-red-500" : ""}`}
        />

        <label
          htmlFor={name}
          className={`border border-[#D1D5DB] bg-[#F9FAFB] w-[calc(100%-104px)] flex gap-2  items-center rounded-lg text-sm text-[#27303F] outline-none cursor-pointer
                ${touched?.[name] && errors?.[name] ? "border-red-500" : ""}`}
        >
          <p className="bg-black rounded-tl-lg rounded-bl-lg w-[96px] text-white px-3 py-3">
            Choose File
          </p>

          <p className="w-[calc(100%-104px)] pr-2">No file chosen</p>
        </label>
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

export default FileInputField;
