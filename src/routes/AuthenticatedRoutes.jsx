import { Outlet } from "react-router-dom";
import PrivateRoute from "@/components/guards/PrivateRoute";
import Applications from "@/pages/applications/Applications";
import NewApplications from "@/pages/applications/NewApplication";
import ApplicationDetails from "@/pages/applications/ApplicationDetails";
import ApplicantInterviewList from "@/pages/applications/ApplicantInterviewList";
import ApplicationInterviewDetails from "@/pages/applications/ApplicationIterviewDetail";

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
      path: "/applicant-invited-list",
      element: <ApplicantInterviewList />,
    },
    {
      path: "/applicant-invited-list/:id",
      element: <ApplicationInterviewDetails />,
    },
    {
      path: "/applications/:id",
      element: <ApplicationDetails />,
    },
  ],
};

export default AuthenticatedRoutes;
