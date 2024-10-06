import { useState } from "react";
import EditButtons from "../EditButtons";
import FormInput from "../FormInput";
import NumberInput from "../NumberInput";

const ApplicationContactInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
      <div className="flex items-center justify-between mb-[24px]">
        <h2 className="text-[18px] leading-[27px] font-semibold">
          Contact information
        </h2>

        <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>

      <div className="border-b border-gray-50 pb-3">
        <FormInput
          label="Email"
          placeholder="Enter Email"
          value="molla.ux@gmail.com"
          isEdit={isEdit}
        />
      </div>
      <div className="border-b border-gray-50 pb-3">
        <NumberInput isEdit={isEdit} label="Contact Number" />
      </div>
      <div className="mb-5 border-b border-gray-50 pb-3">
        <NumberInput isEdit={isEdit} label="WhatsApp Number" />
      </div>
    </div>
  );
};

export default ApplicationContactInfo;
