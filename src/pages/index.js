import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import NewApplication from "./NewApplication";
import NotFound from "./NotFoundPage";
import CheckEmail from "./auth/CheckEmail";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";
import PasswordResetConfirmation from "./auth/PasswordResetConfirmation";
import ResetPassword from "./auth/ResetPassword";

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
		path: "/forgot-password",
		element: <ForgotPassword />,
	},
	{
		path: "/reset-password",
		element: <ResetPassword />,
	},
	{
		path: "/check-email",
		element: <CheckEmail />,
	},
	{
		path: "/new-application",
		element: <NewApplication />,
	},
	{
		path: "/password-reset-confirmation",
		element: <PasswordResetConfirmation />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
