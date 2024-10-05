import { useState } from "react";
import EditButtons from "../EditButtons";
import FormInput from "../FormInput";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantLicenseInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="grid grid-cols-[55%_45%] gap-x-6">
      <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">
            License information
          </h2>

          <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
        </div>

        <div className="grid 2xl:grid-cols-2 mb-5 border-b border-gray-50">
          <FormInput
            label="Driving License"
            placeholder="Driving License"
            value="4552212"
            isEdit={isEdit}
            className="pb-3"
          />
          <FormInput
            label="Expiry Date"
            placeholder="Father Name"
            value="10-June-24"
            className="pb-3"
          />
        </div>
        <div className="grid 2xl:grid-cols-2 mb-5 border-b border-gray-50">
          <FormInput
            label="UAE License"
            placeholder="First Name"
            value="Yes"
            isEdit={isEdit}
            className="pb-3"
          />
          <FormInput
            label="UAE License Number"
            placeholder="UAE License Number"
            value="844"
            isEdit={isEdit}
            className="pb-3"
          />
        </div>
        <div className="grid 2xl:grid-cols-2 mb-5 border-b border-gray-50">
          <FormInput
            label="UAE Resident Visa  Number"
            placeholder="UAE Resident Visa  Number"
            value="546"
            isEdit={isEdit}
            className="pb-3"
          />
          <FormInput
            label="Sim Number"
            placeholder="Sim Number"
            value="84444"
            isEdit={isEdit}
            className="pb-3"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Eye Test Result"
            placeholder="Eye Test Result"
            value="Waiting"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Bike Number"
            placeholder="Bike Number"
            value="324421"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Data Sim"
            placeholder="Data Sim"
            value="314242"
            isEdit={isEdit}
          />
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
