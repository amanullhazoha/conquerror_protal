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

    // {
    //   path: "/profile",
    //   element: <UserProfile />,
    // }
  ]
  //   {
  //     basename: "/",
  //   }
);

export default router;
