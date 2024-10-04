import FormInput from "../FormInput";

const ApplicationContactInfo = () => {
  return (
    <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
      <div className="flex items-center justify-between mb-[24px]">
        <h2 className="text-[18px] leading-[27px] font-semibold">
          Contact information
        </h2>

        <button className="border-[1px] border-gray-200 text-gray-900 p-[8px_12px] rounded-[32px] font-medium text-[12px]">
          Edit
        </button>
      </div>

      <div className="mb-5 border-b border-gray-50 pb-3">
        <FormInput
          label="Email"
          placeholder="First Name"
          value="molla.ux@gmail.com"
        />
      </div>
      <div className="mb-5 border-b border-gray-50 pb-3">
        <FormInput
          label="Contact Number"
          placeholder="Father Name"
          value="+880 1770 066585"
        />
      </div>
      <div className="mb-5 border-b border-gray-50 pb-3">
        <FormInput
          label="WhatsApp Number"
          placeholder="Mother Name"
          value="+880 1770 066585"
        />
      </div>
    </div>
  );
};

export default ApplicationContactInfo;
