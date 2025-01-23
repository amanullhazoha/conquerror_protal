import { useState } from "react";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import PaginationComponent from "@/shared/PaginationComponent";
import ApplicationCard from "@/components/applications/ApplicationCard";
import ApplicationsHeading from "@/components/applications/ApplicationsHeading";
import { useGetAllNewApplicationsQuery } from "@/redux/features/applications/applications";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import MainPreloader from "@/components/preloader/MainPreloader";

const NewApplications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [filterValue, setFilterValue] = useState("all");

  const {
    data: applicationsData,
    isLoading,
    isSuccess,
  } = useGetAllNewApplicationsQuery(
    {
      filter: filterValue,
      searchQuery: searchTerm,
      page: currentPage,
      size: itemsPerPage,
    },
    { refetchOnMountOrArgChange: true }
  );

  const { meta } = applicationsData || {};

  const handleFilterValueChange = (value) => {
    setCurrentPage(1);
    setFilterValue(value);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > meta?.totalPages) return;
    setCurrentPage(newPage);
  };

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(Number(value));
  };

  const handleSearchTerm = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  return (
    <PrivateLayout>
      {isLoading && <MainPreloader />}

      {!isLoading && isSuccess && (
        <div className="border-[1px] border-[#E5E5E5] rounded-[16px]">
          <ApplicationsHeading
            filter={true}
            searchTerm={searchTerm}
            filterValue={filterValue}
            heading="New Entry Application"
            handleSearchTerm={handleSearchTerm}
            totals={applicationsData?.meta?.totalRecords}
            handleFilterValueChange={handleFilterValueChange}
          />

          {applicationsData?.meta?.totalRecords > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-[20px] px-[20px]">
              {applicationsData?.applicants?.map((applicant, idx) => (
                <ApplicationCard
                  key={idx}
                  application={applicant}
                  link="/new-application"
                />
              ))}
            </div>
          ) : (
            <div className="flex gap-3 flex-col justify-center items-center min-h-[60vh]">
              <h3 className="text-base text-black font-medium">
                404 - Application Not Found
              </h3>
            </div>
          )}

          {meta?.totalRecords > itemsPerPage && (
            <div className="flex px-6 py-4">
              <div className="flex items-center gap-2 w-full">
                <p>Rows per page:</p>
                <Select onValueChange={handleItemsPerPageChange}>
                  <SelectTrigger className="w-[60px]">
                    <SelectValue placeholder={itemsPerPage} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12">12</SelectItem>
                    <SelectItem value="24">24</SelectItem>
                    <SelectItem value="48">48</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <PaginationComponent
                totalPages={meta?.totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      )}
    </PrivateLayout>
  );
};

export default NewApplications;
