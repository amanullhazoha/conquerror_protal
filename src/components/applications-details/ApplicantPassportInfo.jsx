import FormInput from "../FormInput";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantPassportInfo = () => {
  return (
    <div className="grid grid-cols-[55%_45%] gap-x-6">
      <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">
          Passport information
          </h2>

          <button className="border-[1px] border-gray-200 text-gray-900 p-[8px_12px] rounded-[32px] font-medium text-[12px]">
            Edit
          </button>
        </div>

        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Passport Number"
            placeholder="First Name"
            value="4552212"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Expiry Date"
            placeholder="Mother Name"
            value="10-June-24"
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
