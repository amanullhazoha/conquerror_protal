import ApplicationDetailsTabs from "@/components/applications/applications-details/ApplicationDetailsTabs";
import UserInfoCard from "@/components/applications/applications-details/UserInfoCard";
import PrivateLayout from "@/components/layouts/PrivateLayout";

const ApplicationDetails = () => {
	return (
		<PrivateLayout>
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-4">
					<UserInfoCard />
				</div>
				<div className="col-span-8">
					<ApplicationDetailsTabs />
				</div>
			</div>
		</PrivateLayout>
	);
};

export default ApplicationDetails;
