import ApplicationDetailsTabs from "@/components/applications/applications-details/ApplicationDetailsTabs";
import UserInfoCard from "@/components/applications/applications-details/UserInfoCard";
import PrivateLayout from "@/components/layouts/PrivateLayout";

const ApplicationDetails = () => {
	return (
		<PrivateLayout>
			<div className="flex gap-x-[24px]">
				<div className="self-start">
					<UserInfoCard />
				</div>
				<div className="flex-1">
					<ApplicationDetailsTabs />
				</div>
			</div>
		</PrivateLayout>
	);
};

export default ApplicationDetails;
