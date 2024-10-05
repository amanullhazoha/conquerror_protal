import ApplicationDetailsTabs from "@/components/applications-details/ApplicationDetailsTabs";
import UserInfoCard from "@/components/applications-details/UserInfoCard";
import PrivateLayout from "@/components/layouts/PrivateLayout";

const ApplicationDetailsPage = () => {
  return (
    <PrivateLayout>
      <div className="flex gap-x-[24px]">
        <UserInfoCard />
        <ApplicationDetailsTabs />
      </div>
    </PrivateLayout>
  );
};

export default ApplicationDetailsPage;
