import FormInput from "../FormInput";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantLicenseInfo = () => {
  return (
    <div className="grid grid-cols-[55%_45%] gap-x-6">
      <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">
            License information
          </h2>

          <button className="border-[1px] border-gray-200 text-gray-900 p-[8px_12px] rounded-[32px] font-medium text-[12px]">
            Edit
          </button>
        </div>

        <div className="grid grid-cols-2 mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Driving License"
            placeholder="First Name"
            value="4552212"
          />
          <FormInput
            label="Expiry Date"
            placeholder="Father Name"
            value="10-June-24"
          />
        </div>
        <div className="grid grid-cols-2 mb-5 border-b border-gray-50 pb-3">
          <FormInput label="UAE License" placeholder="First Name" value="Yes" />
          <FormInput
            label="UAE License Number"
            placeholder="Father Name"
            value="844"
          />
        </div>
        <div className="grid grid-cols-2 mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="UAE Resident Visa  Number"
            placeholder="First Name"
            value="546"
          />
          <FormInput
            label="Sim Number"
            placeholder="Father Name"
            value="84444"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Eye Test Result"
            placeholder="First Name"
            value="Waiting"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Bike Number"
            placeholder="First Name"
            value="324421"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput label="Data Sim" placeholder="First Name" value="314242" />
        </div>
      </div>

      <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
        <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
          Documents
        </h2>

        <div className="grid grid-cols-1 gap-x-4 2xl:grid-cols-2">
          <ApplicantPhoto title="Driving License Front" className="mb-5" />
          <ApplicantPhoto title="Driving License Back" />
        </div>
        <div className="grid grid-cols-1 gap-x-4 2xl:grid-cols-2">
          <ApplicantPhoto title="UAE DL Front" className="mb-5" />
          <ApplicantPhoto title="UAE DL Back" />
        </div>
      </div>
    </div>
  );
};

export default ApplicantLicenseInfo;
