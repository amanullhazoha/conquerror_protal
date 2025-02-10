import PrivateRoute from "@/components/guards/PrivateRoute";
import AllApplicantInterviewList from "@/pages/applications/AllApplicantInterviewList";
import ApplicantInterviewList from "@/pages/applications/ApplicantInterviewList";
import ApplicationDetails from "@/pages/applications/ApplicationDetails";
import ApplicationInterviewDetails from "@/pages/applications/ApplicationIterviewDetail";
import Applications from "@/pages/applications/Applications";
import InvitedApplicantDetail from "@/pages/applications/InvitedApplicantDetial";
import NewApplications from "@/pages/applications/NewApplication";
import SignUp from "@/pages/auth/SignUp";
import DashboardPage from "@/pages/Dashboard";
import { Outlet } from "react-router-dom";
import Transactions from "@/pages/transaction/TransactionListPage";
import { UserProfile } from "@/components/Profile/Profile";

const AuthenticatedRoutes = {
  path: "/",
  element: (
    <PrivateRoute>
      <Outlet />
    </PrivateRoute>
  ),
  children: [
    {
      path: "/dashboard",
      //   element: <Applications />,
      element: <DashboardPage />,
    },
    // {
    //   path: "/interview",
    //   element: <ScheduleInterview />,
    // },
    {
      path: "/create-user",
      element: <SignUp />,
    },
    {
      path: "/transactions",
      element: <Transactions />,
    },
    {
      path: "/applications",
      element: <Applications />,
    },
    {
      path: "/applications/:id",
      element: <ApplicationDetails />,
    },
    {
      path: "/new-application",
      element: <NewApplications />,
    },
    {
      path: "/applicant-interview-list",
      element: <AllApplicantInterviewList />,
    },
    {
      path: "/applicant-interview-list/:id",
      element: <InvitedApplicantDetail />,
    },
    {
      path: "/applicant-invited-list",
      element: <ApplicantInterviewList />,
    },
    {
      path: "/applicant-invited-list/:id",
      element: <ApplicationInterviewDetails />,
    },
    {
      path: "/new-application/:id",
      element: <ApplicationDetails />,
    },
    {
      path: "/profile",
      element: <UserProfile />,
    },
  ],
};

export default AuthenticatedRoutes;
