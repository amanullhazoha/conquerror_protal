import PrivateRoute from "@/components/guards/PrivateRoute";
import NotFound from "@/pages/NotFoundPage";
import ApplicationDetails from "@/pages/applications/ApplicationDetails";
import Applications from "@/pages/applications/Applications";
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
		{
			path: "/applications",
			element: <Applications />,
		},
		{
			path: "/applications/:id",
			element: <ApplicationDetails />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	],
};

export default AuthenticatedRoutes;
