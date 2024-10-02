import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import NotFound from "./NotFoundPage";
import Login from "./auth/Login";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
