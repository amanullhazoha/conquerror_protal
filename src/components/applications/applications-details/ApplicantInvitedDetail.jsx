import { InfoCard } from "@/shared/InfoCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ApplicantInvitedDetail = ({
  application,
  updateInterviewStatus = false,
}) => {
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

      <div>
        {updateInterviewStatus && (
          <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px] mb-6">
            <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
              Applicant Interview Status
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-6">
              <Select defaultValue="Accept">
                <SelectTrigger className="w-full rounded-full py-5">
                  <SelectValue placeholder="Select Option" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Accept">Accept</SelectItem>
                  <SelectItem value="rider">Rider</SelectItem>
                </SelectContent>
              </Select>

              <Button
                className="flex gap-2 bg-[#1A56DB] hover:bg-white text-white hover:text-[#1A56DB] font-medium border-[#1A56DB] rounded-full py-5"
                variant="outline"
              >
                Update
              </Button>
            </div>
          </div>
        )}

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
    </div>
  );
};

export default ApplicantInvitedDetail;
