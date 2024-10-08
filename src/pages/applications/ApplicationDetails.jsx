import ApplicationDetailsTabs from "@/components/applications/applications-details/ApplicationDetailsTabs";
import UserInfoCard from "@/components/applications/applications-details/UserInfoCard";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import { useGetApplicationByIdQuery } from "@/redux/features/applications/applications";
import { useParams } from "react-router-dom";

const ApplicationDetails = () => {
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
					<div className="col-span-4">
						<UserInfoCard application={singleApplication} />
					</div>
					<div className="col-span-8">
						<ApplicationDetailsTabs application={singleApplication} />
					</div>
				</div>
			)}
		</PrivateLayout>
	);
};

export default ApplicationDetails;
