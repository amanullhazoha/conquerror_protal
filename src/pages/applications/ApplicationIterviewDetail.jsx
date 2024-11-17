import { useParams } from "react-router-dom";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import UserInfoCard from "@/components/applications/applications-details/UserInfoCard";
import { useGetApplicantInterviewDetailQuery } from "@/redux/features/applications/applications";
import ApplicantInvitedDetail from "@/components/applications/applications-details/ApplicantInvitedDetail";

const ApplicationInterviewDetails = () => {
  const params = useParams();

  const {
    data: singleApplication,
    isLoading,
    isSuccess,
  } = useGetApplicantInterviewDetailQuery(
    { id: params?.id },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  console.log(singleApplication);

  return (
    <PrivateLayout>
      {isLoading && <p>Loading...</p>}

      {!isLoading && isSuccess && (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <UserInfoCard
              backTitle="Back To list"
              backLink="/applicant-invited-list"
              invitedBy={singleApplication?.data?.invitedBy}
              application={singleApplication?.data?.jobApplicant}
              applicantInterview={singleApplication?.data?.applicantInterview}
            />
          </div>
          <div className="col-span-8">
            <h2 className="mb-[28px] text-2xl text-gray-900 font-semibold">
              Invited details
            </h2>

            <ApplicantInvitedDetail
              application={singleApplication?.data?.jobApplicant}
              applicantInterview={singleApplication?.data?.applicantInterview}
            />
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};

export default ApplicationInterviewDetails;
