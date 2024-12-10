import ScheduleInterview from "@/components/ScheduleInterview";
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
    }
  ],
  {
    basename: "/",
  }
);

export default router;
