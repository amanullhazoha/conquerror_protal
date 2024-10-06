import { createBrowserRouter } from "react-router-dom";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import PublicRoutes from "./PublicRoutes";

const router = createBrowserRouter([PublicRoutes, AuthenticatedRoutes], {
	basename: "/",
});

export default router;
