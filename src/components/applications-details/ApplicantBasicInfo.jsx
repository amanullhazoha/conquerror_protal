import FormInput from "../FormInput";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantBasicInfo = () => {
  return (
    <div className="grid grid-cols-[55%_45%] gap-x-6">
      <div className="border-[1px] flex-1 border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">
            Basic Information
          </h2>

          <button className="border-[1px] border-gray-200 text-gray-900 p-[8px_12px] rounded-[32px] font-medium text-[12px]">
            Edit
          </button>
        </div>

        <div className="grid grid-cols-2 mb-5 border-b border-gray-50 pb-3">
          <FormInput label="First Name" placeholder="First Name" value="Anik" />
          <FormInput label="Last Name" placeholder="First Name" value="Molla" />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Father Name"
            placeholder="Father Name"
            value="Anika"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Mother Name"
            placeholder="Mother Name"
            value="Anika"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Date of Birth"
            placeholder="First Name"
            value="5-June-1998"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput label="Gender" placeholder="First Name" value="Male" />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Nationality"
            placeholder="First Name"
            value="Nepal"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput label="Position" placeholder="First Name" value="Rider" />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Reference Number"
            placeholder="First Name"
            value="4552212"
          />
        </div>
      </div>

      <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
        <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
          Documents
        </h2>

        <ApplicantPhoto title="Applicant Photo" />
      </div>
    </div>
  );
};

export default ApplicantBasicInfo;
