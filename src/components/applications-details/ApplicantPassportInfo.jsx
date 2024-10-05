import { useState } from "react";
import FormInput from "../FormInput";
import ApplicantPhoto from "./ApplicantPhoto";
import EditButtons from "../EditButtons";

const ApplicantPassportInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="grid grid-cols-[55%_45%] gap-x-6">
      <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">
          Passport information
          </h2>

          <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
        </div>

        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Passport Number"
            placeholder="Passport Number"
            value="4552212"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Expiry Date"
            value="10-June-24"
            type="date"
            isEdit={isEdit}
          />
        </div>
      </div>

      <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
        <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
          Documents
        </h2>

        <ApplicantPhoto title="Passport Front Page" className="mb-5" />
        <ApplicantPhoto title="Signature Page" />
      </div>
    </div>
  );
};

export default ApplicantPassportInfo;
