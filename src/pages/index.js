import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import NotFound from "./NotFoundPage";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword";
import CheckEmail from "./auth/CheckEmail";
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
		path: "/password-reset-confirmation",
		element: <PasswordResetConfirmation />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
