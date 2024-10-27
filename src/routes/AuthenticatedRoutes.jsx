import { Outlet } from "react-router-dom";
import PrivateRoute from "@/components/guards/PrivateRoute";
import Applications from "@/pages/applications/Applications";
import NewApplications from "@/pages/applications/NewApplication";
import ApplicationDetails from "@/pages/applications/ApplicationDetails";
import ApplicantInterviewList from "@/pages/applications/ApplicantInterviewList";
import ApplicationInterviewDetails from "@/pages/applications/ApplicationIterviewDetail";
import AllApplicantInterviewList from "@/pages/applications/AllApplicantInterviewList";
import InvitedApplicantDetail from "@/pages/applications/InvitedApplicantDetial";

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
