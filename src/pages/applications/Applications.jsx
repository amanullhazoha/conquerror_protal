import ApplicationCard from "@/components/applications/ApplicationCard";
import ApplicationsHeading from "@/components/applications/ApplicationsHeading";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { useGetAllApplicationsQuery } from "@/redux/features/applications/applications";
import PaginationComponent from "@/shared/PaginationComponent";
import { useState } from "react";

const Applications = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(10);

	const {
		data: applicationsData,
		isLoading,
		isSuccess
	} = useGetAllApplicationsQuery(
		{
			searchQuery: searchTerm,
			page: currentPage,
			size: itemsPerPage
		},
		{ refetchOnMountOrArgChange: true }
	);

	const { meta } = applicationsData || {};

	// Function to handle page change
	const handlePageChange = (newPage) => {
		if (newPage < 1 || newPage > meta?.totalPages) return;
		setCurrentPage(newPage);
	};

	// Function to handle items per page change
	const handleItemsPerPageChange = (value) => {
		setItemsPerPage(Number(value));
	};

	// Handle search term
	const handleSearchTerm = (term) => setSearchTerm(term);

	return (
		<PrivateLayout>
			{isLoading && <p>Loading...</p>}

			{!isLoading && isSuccess && (
				<div className="border-[1px] border-[#E5E5E5] rounded-[16px]">
					<ApplicationsHeading
						searchTerm={searchTerm}
						handleSearchTerm={handleSearchTerm}
					/>

					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[20px] px-[20px]">
						{applicationsData?.applicants?.map((applicant, idx) => (
							<ApplicationCard key={idx} application={applicant} />
						))}
					</div>

					<div className="flex px-6 py-4">
						<div className="flex items-center gap-2 w-full">
							<p>Rows per page:</p>
							<Select onValueChange={handleItemsPerPageChange}>
								<SelectTrigger className="w-[60px]">
									<SelectValue placeholder="10" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="10">10</SelectItem>
									<SelectItem value="20">20</SelectItem>
									<SelectItem value="50">50</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<PaginationComponent
							totalPages={meta?.totalPages}
							currentPage={currentPage}
							handlePageChange={handlePageChange}
						/>
					</div>
				</div>
			)}
		</PrivateLayout>
	);
};

export default Applications;
