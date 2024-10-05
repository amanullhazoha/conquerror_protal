import { useState } from "react";
import EditButtons from "../EditButtons";
import FormInput from "../FormInput";
import RadioInput from "../RadioInput";
import ApplicantPhoto from "./ApplicantPhoto";

const ApplicantBasicInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="grid grid-cols-[55%_45%] gap-x-6">
      <div className="border-[1px] flex-1 border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">
            Basic Information
          </h2>

          <EditButtons isEdit={isEdit} setIsEdit={setIsEdit} />
        </div>

        <div className="grid 2xl:grid-cols-2 mb-5 border-b border-gray-50">
          <FormInput
            label="First Name"
            placeholder="First Name"
            value="Anik"
            isEdit={isEdit}
            className="pb-3"
          />
          <FormInput
            label="Last Name"
            placeholder="Last Name"
            value="Molla"
            isEdit={isEdit}
            className="pb-3"
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Father Name"
            placeholder="Father Name"
            value="Anika"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Mother Name"
            placeholder="Mother Name"
            value="Anika"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Date of Birth"
            value="5-June-1998"
            type="date"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <RadioInput
            label="Select Gender"
            value="male"
            isEdit={isEdit}
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "others", label: "Others" },
            ]}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Nationality"
            placeholder="First Name"
            value="Nepal"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Position"
            placeholder="First Name"
            value="Rider"
            isEdit={isEdit}
          />
        </div>
        <div className="mb-5 border-b border-gray-50 pb-3">
          <FormInput
            label="Reference Number"
            placeholder="First Name"
            value="4552212"
            isEdit={isEdit}
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
