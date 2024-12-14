import PrivateRoute from "@/components/guards/PrivateRoute";
import AllApplicantInterviewList from "@/pages/applications/AllApplicantInterviewList";
import ApplicantInterviewList from "@/pages/applications/ApplicantInterviewList";
import ApplicationDetails from "@/pages/applications/ApplicationDetails";
import ApplicationInterviewDetails from "@/pages/applications/ApplicationIterviewDetail";
import Applications from "@/pages/applications/Applications";
import InvitedApplicantDetail from "@/pages/applications/InvitedApplicantDetial";
import NewApplications from "@/pages/applications/NewApplication";
import SignUp from "@/pages/auth/SignUp";
import { Outlet } from "react-router-dom";

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
      element: <Applications />,
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
      path: "/applications",
      element: <Applications />,
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
  ],
};

export default AuthenticatedRoutes;
