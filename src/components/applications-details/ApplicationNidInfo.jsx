import FormInput from "../FormInput";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicationNidInfo = () => {
  return (
    <div className="grid grid-cols-[55%_45%] gap-x-6">
      <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">
            NID/CNIC information
          </h2>

          <button className="border-[1px] border-gray-200 text-gray-900 p-[8px_12px] rounded-[32px] font-medium text-[12px]">
            Edit
          </button>
        </div>

        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="NID/CNIC Number"
            placeholder="First Name"
            value="4552212"
          />
        </div>
        <div className="grid grid-cols-2 mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Marital Status"
            placeholder="Father Name"
            value="Marital Status"
          />
          <FormInput
            label="Spouse Name"
            placeholder="Father Name"
            value="Spouse Name"
          />
        </div>
        <div className="grid grid-cols-3 mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="UAE Resident"
            placeholder="Father Name"
            value="Yes"
          />
          <FormInput
            label="Emirates ID"
            placeholder="Father Name"
            value="82455554"
          />
          <FormInput
            label="Expiry Date"
            placeholder="Father Name"
            value="10-June-24"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Religion "
            placeholder="Mother Name"
            value="+880 1770 066585"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Permanent Address"
            placeholder="Mother Name"
            value="Dhaka faridpur bd"
          />
        </div>
        <div className="grid grid-cols-2 mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="State/ Province"
            placeholder="Mother Name"
            value="Dhaka"
          />
          <FormInput label="City" placeholder="Mother Name" value="Dhaka" />
        </div>
        <div className="grid grid-cols-2 mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Police Station"
            placeholder="Mother Name"
            value="Dhaka"
          />
          <FormInput
            label="Postal Code"
            placeholder="Mother Name"
            value="7850"
          />
        </div>
      </div>

      <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
        <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
          Documents
        </h2>

        <ApplicantPhoto title="NID/CNIC Front Page" className="mb-5" />
        <ApplicantPhoto title="NID/CNIC Back Page" />
      </div>
    </div>
  );
};

export default ApplicationNidInfo;
