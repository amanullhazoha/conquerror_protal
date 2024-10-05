import { useState } from "react";
import EditButtons from "../EditButtons";
import FormInput from "../FormInput";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicationNidInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="grid grid-cols-[55%_45%] gap-x-6">
      <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">
            NID/CNIC information
          </h2>

          <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
        </div>

        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="NID/CNIC Number"
            placeholder="NID?CNIC Number"
            value="4552212"
            isEdit={isEdit}
          />
        </div>
        <div className="grid 2xl:grid-cols-2 mb-5 border-b border-gray-50">
          <FormInput
            label="Marital Status"
            placeholder="Marital Status"
            value="Marital Status"
            isEdit={isEdit}
            className="pb-3"
          />
          <FormInput
            label="Spouse Name"
            placeholder="Spouse Name"
            value="Spouse Name"
            isEdit={isEdit}
            className="pb-3"
          />
        </div>
        <div className="grid 2xl:grid-cols-3 mb-5 border-b border-gray-50">
          <FormInput
            label="UAE Resident"
            placeholder="UAE Resident"
            value="Yes"
            isEdit={isEdit}
            className="pb-3"
          />
          <FormInput
            label="Emirates ID"
            placeholder="Emirates ID"
            value="82455554"
            isEdit={isEdit}
            className="pb-3"
          />
          <FormInput
            label="Expiry Date"
            value="10-June-24"
            isEdit={isEdit}
            type="date"
            className="pb-3"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Religion "
            placeholder="Religion"
            value="+880 1770 066585"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Permanent Address"
            placeholder="Permanent Address"
            value="Dhaka faridpur bd"
            isEdit={isEdit}
          />
        </div>
        <div className="grid 2xl:grid-cols-2 mb-5 border-b border-gray-50">
          <FormInput
            label="State/ Province"
            placeholder="State/ Province"
            value="Dhaka"
            className="pb-3"
            isEdit={isEdit}
          />
          <FormInput
            label="City"
            placeholder="City"
            value="Dhaka"
            isEdit={isEdit}
            className="pb-3"
          />
        </div>
        <div className="grid 2xl:grid-cols-2 mb-5 border-b border-gray-50">
          <FormInput
            label="Police Station"
            placeholder="Police Station"
            value="Dhaka"
            className="pb-3"
            isEdit={isEdit}
          />
          <FormInput
            label="Postal Code"
            placeholder="Postal Code"
            value="7850"
            className="pb-3"
            isEdit={isEdit}
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
