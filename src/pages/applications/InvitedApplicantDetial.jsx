import { useParams } from "react-router-dom";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import UserInfoCard from "@/components/applications/applications-details/UserInfoCard";
import { useGetApplicationByIdQuery } from "@/redux/features/applications/applications";
import ApplicantInvitedDetail from "@/components/applications/applications-details/ApplicantInvitedDetail";

const InvitedApplicantDetail = () => {
  const params = useParams();

  const {
    data: singleApplication,
    isLoading,
    isSuccess,
  } = useGetApplicationByIdQuery(params?.id, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <PrivateLayout>
      {isLoading && <p>Loading...</p>}

      {!isLoading && isSuccess && (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-4">
            <UserInfoCard
              backTitle="Back To list"
              application={singleApplication}
              backLink="/applicant-interview-list"
            />
          </div>

          <div className="col-span-12 xl:col-span-8">
            <h2 className="mb-[28px] text-2xl text-gray-900 font-semibold">
              Applicant Accepted details
            </h2>

            <ApplicantInvitedDetail
              updateInterviewStatus={true}
              application={singleApplication}
            />
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};

export default InvitedApplicantDetail;
