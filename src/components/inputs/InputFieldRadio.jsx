import { ErrorMessage } from "formik";

const InputFieldRadio = ({
  name,
  value,
  label,
  items,
  handleSelect,
  required = true,
}) => {
  return (
    <div>
      <label htmlFor={name} className="text-sm text-[#27303F] font-medium">
        {label} {required && <span className="text-[#F04438]">*</span>}
      </label>

      <div className="flex gap-4 pt-2">
        {items.map((item) => (
          <div className="flex gap-2.5 items-center w-fit" key={item.id}>
            <input
              name={name}
              type="radio"
              id={item.name}
              value={item.value}
              onChange={() => handleSelect(item.value)}
              checked={item.value === value ? true : false}
              className="text-sm text-[#27303F] outline-none w-4 h-4"
            />

            <label htmlFor={item.name} className="text-sm text-[#27303F]">
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

export default InputFieldRadio;
