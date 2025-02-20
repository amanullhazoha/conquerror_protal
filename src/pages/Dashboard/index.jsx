import { useState } from "react";
import newEntryCardImage from "@/assets/images/card.png";
import interviewCardImage from "@/assets/images/interviewCard.png";
import dutyJoinCardImage from "@/assets/images/dutyJoinCrad.png";
import requestApproveCard from "@/assets/images/requestApproveCard.png";
import paymentReceivedCard from "@/assets/images/paymentReceviedCard.png";
import cridtApproveCard from "@/assets/images/cridtApproveCard.png";
import updateApproveCard from "@/assets/images/updateApproveCard.png";
import bikeIssueCard from "@/assets/images/bikeIssueCard.png";
import MetricCard from "@/components/card/MerticCard";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import PaginationComponent from "@/shared/PaginationComponent";
import MainPreloader from "@/components/preloader/MainPreloader";
import ApplicationCard from "@/components/applications/ApplicationCard";
import { useGetAllApplicationsQuery } from "@/redux/features/applications/applications";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";
import ApplicationsHeadingForDashboard from "@/components/applications/ApplicationHeadingForDashboard";

const DashboardPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [filterValue, setFilterValue] = useState("all");

  const {
    data: applicationsData,
    isLoading,
    isSuccess,
  } = useGetAllApplicationsQuery(
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
    <PrivateLayout className="bg-[#F8F8F8]">
      {isLoading && <MainPreloader />}

      {!isLoading && isSuccess && (
        <>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-[20px] pb-5">
            <MetricCard
              title="New Entry Application"
              value="573"
              graphType="up"
              cardImage={newEntryCardImage}
              percent="100"
            />

            <MetricCard
              title="Invite For Interview"
              value="1210"
              graphType="down"
              cardImage={interviewCardImage}
              percent="10"
            />

            <MetricCard
              title="Duty Joined"
              value="2000"
              graphType="up"
              cardImage={dutyJoinCardImage}
              percent="100"
            />

            <MetricCard
              title="Bike Issued"
              value="2000"
              graphType="up"
              cardImage={bikeIssueCard}
              percent="100"
            />

            <MetricCard
              title="Payment Received"
              value="2000"
              graphType="up"
              cardImage={paymentReceivedCard}
              percent="100"
            />

            <MetricCard
              title="Edit/Update Approval"
              value="2000"
              graphType="up"
              cardImage={updateApproveCard}
              percent="100"
            />

            <MetricCard
              title="Credit Approval Request"
              value="2000"
              graphType="up"
              cardImage={cridtApproveCard}
              percent="100"
            />

            <MetricCard
              title="Service Req Approval"
              value="2000"
              graphType="up"
              cardImage={requestApproveCard}
              percent="100"
            />

            <MetricCard
              title="Payment Received"
              value="2000"
              graphType="up"
              cardImage={paymentReceivedCard}
              percent="100"
            />

            <MetricCard
              title="Edit/Update Approval"
              value="2000"
              graphType="up"
              cardImage={updateApproveCard}
              percent="100"
            />

            <MetricCard
              title="Credit Approval Request"
              value="2000"
              graphType="up"
              cardImage={cridtApproveCard}
              percent="100"
            />

            <MetricCard
              title="Service Req Approval"
              value="2000"
              graphType="up"
              cardImage={requestApproveCard}
              percent="100"
            />
          </div>

          <div className="border-[1px] border-[#E5E5E5] bg-white rounded-[16px]">
            <ApplicationsHeadingForDashboard
              filter={true}
              searchTerm={searchTerm}
              heading="All Application"
              filterValue={filterValue}
              handleSearchTerm={handleSearchTerm}
              totals={applicationsData?.meta?.totalRecords}
              handleFilterValueChange={handleFilterValueChange}
            />

            {applicationsData?.meta?.totalRecords > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-[20px] px-[20px]">
                {applicationsData?.applicants?.map((applicant, idx) => (
                  <ApplicationCard
                    key={idx}
                    link="/applications"
                    application={applicant}
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

            {Number(meta?.totalRecords) > itemsPerPage && (
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
        </>
      )}
    </PrivateLayout>
  );
};

export default DashboardPage;
