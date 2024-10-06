import PrivateRoute from "@/components/guards/PrivateRoute";
import ApplicationDetailsPage from "@/pages/ApplicationDetailsPage";
import NewApplication from "@/pages/NewApplication";
import NotFound from "@/pages/NotFoundPage";
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
			element: <NewApplication />,
		},
		{
			path: "/new-application",
			element: <NewApplication />,
		},
		{
			path: "/application-details",
			element: <ApplicationDetailsPage />,
		},
    {
      path: "*",
      element: <NotFound />,
    },
	],
};

export default AuthenticatedRoutes;
