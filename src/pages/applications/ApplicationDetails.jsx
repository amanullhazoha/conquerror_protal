import useToast from "@/hooks/useToast";
import { useParams } from "react-router-dom";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import UserInfoCard from "@/components/applications/applications-details/UserInfoCard";
import ApplicationDetailsTabs from "@/components/applications/applications-details/ApplicationDetailsTabs";
import {
  useGetApplicationByIdQuery,
  useCreateZoomMeetingByUserIdMutation,
} from "@/redux/features/applications/applications";

const ApplicationDetails = () => {
  const params = useParams();

  const { showSuccess, showError } = useToast();

  const {
    data: singleApplication,
    isLoading,
    isSuccess,
  } = useGetApplicationByIdQuery(params?.id, {
    refetchOnMountOrArgChange: true,
  });

  const [createMeeting, { isLoading: isCreateMeetingLoading }] =
    useCreateZoomMeetingByUserIdMutation();

  const handleCreateMeeting = async (userId, topic, start_time, duration) => {
    console.log("createMeeting", userId, topic, start_time, duration);

    const meeting = await createMeeting({
      id: userId,
      data: {
        topic,
        start_time,
        duration,
      },
    });

    console.log(meeting);
  };

  // useEffect(() => {
  //   if (isSuccess) {
  //     showSuccess("Basic information updated successful");
  //     setIsEdit(false);
  //   }

  //   if (isError) {
  //     showError(error?.data);
  //   }
  // }, [isError, isSuccess]);

  return (
    <PrivateLayout>
      {isLoading && <p>Loading...</p>}

      {!isLoading && isSuccess && (
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-4">
            <UserInfoCard
              invateForInterView={true}
              backLink="/new-application"
              application={singleApplication}
              createMeeting={handleCreateMeeting}
              backTitle="Back to application list"
            />
          </div>
          <div className="col-span-12 xl:col-span-8">
            <ApplicationDetailsTabs application={singleApplication} />
          </div>
        </div>
      )}
    </PrivateLayout>
  );
};

export default ApplicationDetails;
