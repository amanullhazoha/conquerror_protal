import ApplicationCard from "@/components/applications/ApplicationCard";
import ApplicationHeading from "@/components/applications/ApplicationHeading";
import ApplicationPagination from "@/components/applications/ApplicationPagination";
import PrivateLayout from "@/components/layouts/PrivateLayout";

const NewApplication = () => {
	return (
		<PrivateLayout>
			<div className="border-[1px] border-[#E5E5E5] rounded-[16px]">
				<ApplicationHeading />

				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[20px] px-[20px]">
					{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
						<ApplicationCard />
					))}
				</div>
				<ApplicationPagination />
			</div>
		</PrivateLayout>
	);
};

export default NewApplication;
