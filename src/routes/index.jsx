import ScheduleInterview from "@/components/interview/ScheduleInterview";
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
    }
  ],
  {
    basename: "/",
  }
);

export default router;
