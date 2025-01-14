import { useState } from "react";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import PaginationComponent from "@/shared/PaginationComponent";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApplicationCard from "@/components/applications/ApplicationCard";
import ApplicationsHeading from "@/components/applications/ApplicationsHeading";
import { useGetAllInterviewApplicationsQuery } from "@/redux/features/applications/applications";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

const AllApplicantInterviewList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [activeTab, setActiveTab] = useState("accepted");

  const {
    data: applicationsData,
    isLoading,
    isSuccess,
  } = useGetAllInterviewApplicationsQuery(
    {
      status: activeTab,
      searchQuery: searchTerm,
      page: currentPage,
      size: itemsPerPage,
    },
    { refetchOnMountOrArgChange: true }
  );

  const { meta } = applicationsData || {};

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
      {isLoading && <p>Loading...</p>}

      {!isLoading && isSuccess && (
        <>
          <div className="mb-6">
            <h3 className="text-[#111928] text-[24px] leading-[28px] font-semibold mb-[28px]">
              Invited For Interview
            </h3>

            <Tabs defaultValue={activeTab} className="max-w-full">
              <TabsList>
                <TabsTrigger
                  value="accepted"
                  onClick={() => setActiveTab("accepted")}
                >
                  Accepted
                </TabsTrigger>
                <TabsTrigger
                  value="hired"
                  onClick={() => setActiveTab("hired")}
                >
                  Hired
                </TabsTrigger>

                <TabsTrigger
                  value="pending"
                  onClick={() => setActiveTab("pending")}
                >
                  Pending
                </TabsTrigger>

                <TabsTrigger
                  value="under_review"
                  onClick={() => setActiveTab("under_review")}
                >
                  Under Review
                </TabsTrigger>

                <TabsTrigger
                  value="rejected"
                  onClick={() => setActiveTab("rejected")}
                >
                  Rejected
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="border-[1px] border-[#E5E5E5] rounded-[16px]">
            <ApplicationsHeading
              searchTerm={searchTerm}
              heading={`Applicant ${activeTab}`}
              handleSearchTerm={handleSearchTerm}
              totals={applicationsData?.meta?.totalRecords}
            />

            {applicationsData?.meta?.totalRecords > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-[20px] px-[20px]">
                {applicationsData?.applicants?.map((applicant, idx) => (
                  <ApplicationCard
                    key={idx}
                    application={applicant}
                    link="/applicant-interview-list"
                  />
                ))}
              </div>
            ) : (
              <div className="flex gap-3 flex-col justify-center items-center min-h-[48vh]">
                <h3 className="text-base text-black font-medium">
                  404 - Application Not Found
                </h3>
              </div>
            )}

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
                currentPage={currentPage}
                totalPages={meta?.totalPages}
                handlePageChange={handlePageChange}
              />
            </div>
          </div>
        </>
      )}
    </PrivateLayout>
  );
};

export default AllApplicantInterviewList;
