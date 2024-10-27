import GlobalRoutes from "./GlobalRoutes";
import PublicRoutes from "./PublicRoutes";
import { createBrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./AuthenticatedRoutes";

const router = createBrowserRouter(
  [PublicRoutes, AuthenticatedRoutes, GlobalRoutes],
  {
    basename: "/",
  }
);

export default router;
