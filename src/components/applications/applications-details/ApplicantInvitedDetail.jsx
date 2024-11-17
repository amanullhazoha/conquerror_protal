import { format } from "date-fns";
import useToast from "@/hooks/useToast";
import { useState, useEffect } from "react";
import { InfoCard } from "@/shared/InfoCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useApplicationStatusUpdateByIDMutation } from "@/redux/features/applications/applications";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

const formatDateTime = (dateInput, timeInput) => {
  if (dateInput && timeInput) {
    const [year, month, day] = dateInput?.split("-").map(Number);
    const [hours, minutes] = timeInput?.split(":").map(Number);

    const date = new Date(year, month - 1, day, hours, minutes);

    return format(date, "d MMMM yyyy h:mm a");
  }

  return "Null";
};

const ApplicantInvitedDetail = ({
  application,
  applicantInterview,
  updateInterviewStatus = false,
}) => {
  const navigate = useNavigate();

  const { showSuccess, showError } = useToast();
  const [status, setStatus] = useState("accept");

  const [applicationStatusUpdate, { isLoading, isSuccess, error, isError }] =
    useApplicationStatusUpdateByIDMutation();

  const handleStatusChange = () => {
    applicationStatusUpdate({ status, id: application.id });
  };

  useEffect(() => {
    if (isSuccess) {
      showSuccess("Application status update successfully");

      navigate("/applicant-interview-list");
    }

    if (isError) {
      showError(error?.data?.message);
    }
  }, [isError, isSuccess]);

  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="border-[1px] border-[#E5E5E5] p-[24px] rounded-[16px]">
        <div className="flex items-center justify-between mb-[24px]">
          <h2 className="text-[18px] leading-[27px] font-semibold">Overview</h2>
        </div>

        <div>
          <InfoCard
            title="Full Name"
            content={`${application?.first_name} ${application?.last_name}`}
          />

          <InfoCard title="Nationality" content={application?.nationality} />
          <InfoCard title="Email" content={application?.email} />
          <InfoCard
            title="Ref Code"
            content={application?.reference ? application?.reference : "No"}
          />
        </div>
      </div>

      <div>
        {updateInterviewStatus && (
          <div className="border-[1px] self-start border-[#E5E5E5] p-[24px] rounded-[16px] mb-6">
            <h2 className="text-[18px] leading-[27px] font-semibold mb-5">
              Applicant Interview Status
            </h2>

            <div className="mt-4 grid grid-cols-2 gap-6">
              <Select
                defaultValue={status}
                disabled={isLoading}
                onValueChange={(value) => setStatus(value)}
              >
                <SelectTrigger className="w-full rounded-full py-5">
                  <SelectValue placeholder="Select Option" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="accept">Accept</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="under_review">Under Review</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={handleStatusChange}
                className="flex gap-2 bg-[#1A56DB] hover:bg-white text-white hover:text-[#1A56DB] font-medium border-[#1A56DB] rounded-full py-5"
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
              title="Meeting Type"
              content={applicantInterview?.interview_method}
            />

            <InfoCard
              title="Meeting Time"
              content={`${formatDateTime(
                applicantInterview?.scheduled_at,
                applicantInterview?.time
              )} , Time Zone by ${
                applicantInterview?.zonecountry
                  ? applicantInterview?.zonecountry
                  : "null"
              }`}
            />

            {applicantInterview?.interview_method === "in-person" && (
              <>
                <InfoCard
                  title="Interview address"
                  content={applicantInterview?.address}
                />

                <InfoCard
                  title="State / Province"
                  content={applicantInterview?.state}
                />

                <InfoCard
                  title="City / District"
                  content={applicantInterview?.city}
                />

                <InfoCard
                  title="Police station"
                  content={applicantInterview?.police_station}
                />

                <InfoCard
                  title="Post office"
                  content={applicantInterview?.post_office}
                />

                <InfoCard
                  title="Required Document"
                  content={applicantInterview?.required_document}
                />
              </>
            )}

            {applicantInterview?.interview_method === "online" && (
              <>
                <InfoCard
                  title="Meeting URL"
                  content={applicantInterview?.meetingurl}
                />
              </>
            )}

            <InfoCard title="Note" content={applicantInterview?.message} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantInvitedDetail;
