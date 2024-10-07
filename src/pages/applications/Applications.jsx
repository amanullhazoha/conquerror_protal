import ApplicationCard from "@/components/applications/ApplicationCard";
import ApplicationsHeading from "@/components/applications/ApplicationsHeading";
import ApplicationsPagination from "@/components/applications/ApplicationsPagination";
import PrivateLayout from "@/components/layouts/PrivateLayout";

const Applications = () => {
	return (
		<PrivateLayout>
			<div className="border-[1px] border-[#E5E5E5] rounded-[16px]">
				<ApplicationsHeading />

				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[20px] px-[20px]">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
						<ApplicationCard />
					))}
				</div>
				<ApplicationsPagination />
			</div>
		</PrivateLayout>
	);
};

export default Applications;
