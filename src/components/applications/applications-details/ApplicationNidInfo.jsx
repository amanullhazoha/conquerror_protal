import EditButtons from "@/components/EditButtons";
import FormInput from "@/components/FormInput";
import SelectBox from "@/components/FormSelect";
import RadioInput from "@/components/RadioInput";
import { useState } from "react";
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

        <div className={`${!isEdit && "mb-5 border-b border-gray-50"} pb-3`}>
          <FormInput
            label="NID/CNIC Number"
            placeholder="NID?CNIC Number"
            value="4552212"
            isEdit={isEdit}
          />
        </div>
        <div
          className={`${
            !isEdit
              ? "mb-5 border-b border-gray-50"
              : "2xl:grid 2xl:grid-cols-1"
          } grid 2xl:grid-cols-2 gap-x-5`}
        >
          <RadioInput
            label="Marital Status"
            value="married"
            isEdit={isEdit}
            options={[
              { value: "single", label: "Single" },
              { value: "married", label: "Married" },
              { value: "divorced", label: "Divorced" },
            ]}
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
        <div
          className={`${
            !isEdit && "mb-5 border-b border-gray-50"
          } grid 2xl:grid-cols-3 gap-x-5`}
        >
          <RadioInput
            label="UAE Resident"
            value="yes"
            isEdit={isEdit}
            options={[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
            ]}
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
        <div className={`${!isEdit && "mb-5 border-b border-gray-50"} pb-3`}>
          <SelectBox
            label="Religion"
            options={["Islam", "Christian", "Hinduism"]}
            isEdit={isEdit}
            value="Islam"
            className
          />
        </div>
        <div className={`${!isEdit && "mb-5 border-b border-gray-50"} pb-3`}>
          <FormInput
            label="Permanent Address"
            placeholder="Permanent Address"
            value="Dhaka faridpur bd"
            isEdit={isEdit}
          />
        </div>
        <div
          className={`${
            !isEdit && "mb-5 border-b border-gray-50"
          } grid 2xl:grid-cols-2 gap-x-5`}
        >
          <SelectBox
            label="State/ Province"
            options={["Dhaka", "Rajshahi", "Chittagong"]}
            isEdit={isEdit}
            value="Dhaka"
            className="pb-3"
          />
          <SelectBox
            label="City"
            options={["Dhaka", "Rajshahi", "Chittagong"]}
            isEdit={isEdit}
            value="Dhaka"
            className="pb-3"
          />
        </div>
        <div
          className={`${
            !isEdit && "mb-5 border-b border-gray-50"
          } grid 2xl:grid-cols-2 gap-x-5`}
        >
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
