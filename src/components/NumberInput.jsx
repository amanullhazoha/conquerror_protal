import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const NumberInput = ({ isEdit, label }) => {
  const [phone, setPhone] = useState("+1 123 4567 890");
  return (
    <>
      <label
        htmlFor=""
        className={`text-[12px] font-medium text-gray-400 inline-block ${
          isEdit && "text-gray-900 text-sm mb-2"
        }`}
      >
        {label} {isEdit && <sup className="text-red-500">*</sup>}
      </label>{" "}
      {isEdit ? (
        <PhoneInput
          defaultCountry="a"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
      ) : (
        <h4 className="text-gray-900 text-sm mt-3">{phone}</h4>
      )}
    </>
  );
};

export default NumberInput;
