import { InfoCard } from "@/shared/InfoCard";

const ApplicantInvitedDetail = ({ application }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">Overview</h2>
        </div>

        <div>
          <InfoCard title="Full Name" content="Abu Taher Molla" />
          <InfoCard title="Nationality" content="Nepal" />
          <InfoCard title="Email" content="molla.ux@gmail.com" />
          <InfoCard title="Ref Code" content="No" />
        </div>
      </div>

      <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px]">
        <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
          Meeting info
        </h2>

        <div>
          <InfoCard
            title="Meeting Time"
            content="17 August 2024 9:02 AM , Time Zone By Dubai"
          />
          <InfoCard title="Note" content="attend please asap" />
        </div>
      </div>
    </div>
  );
};

export default ApplicantInvitedDetail;
