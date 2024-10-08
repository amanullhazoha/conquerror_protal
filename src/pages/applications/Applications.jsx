import ApplicationCard from "@/components/applications/ApplicationCard";
import ApplicationsHeading from "@/components/applications/ApplicationsHeading";
import ApplicationsPagination from "@/components/applications/ApplicationsPagination";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import { useGetAllApplicationsQuery } from "@/redux/features/applications/applications";

const Applications = () => {
	const {
		data: applicationsData,
		isLoading,
		isSuccess,
	} = useGetAllApplicationsQuery();

	return (
		<PrivateLayout>
			{isLoading && <p>Loading...</p>}

			{!isLoading && isSuccess && (
				<div className="border-[1px] border-[#E5E5E5] rounded-[16px]">
					<ApplicationsHeading />

					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[20px] px-[20px]">
						{applicationsData?.applicants?.map((applicant, idx) => (
							<ApplicationCard key={idx} applicant={applicant} />
						))}
					</div>

					<ApplicationsPagination />
				</div>
			)}
		</PrivateLayout>
	);
};

export default Applications;
