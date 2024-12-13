import ScheduleInterview from "@/components/interview/ScheduleInterview";
import { UserProfile } from "@/components/Profile/Profile";
import Transactions from "@/components/transactions/Transactions";
import { createBrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import GlobalRoutes from "./GlobalRoutes";
import PublicRoutes from "./PublicRoutes";

const router = createBrowserRouter(
  [
    PublicRoutes,
    AuthenticatedRoutes,
    GlobalRoutes,
    {
      path: "/interview",
      element: <ScheduleInterview />,
    },
    {
      path: "/transactions",
      element: <Transactions />,
    },
    {
      path: "/profile",
      element: <UserProfile />,
    }
  ],
  {
    basename: "/",
  }
);

export default router;
