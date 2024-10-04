import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import NewApplication from "./NewApplication";
import NotFound from "./NotFoundPage";
import CheckEmail from "./auth/CheckEmail";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";
import PasswordResetConfirmation from "./auth/PasswordResetConfirmation";
import ResetPassword from "./auth/ResetPassword";
import Details from "./Modal";
import EditDetails from "./Modal";
import Modal from "./Modal";

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
		path: "/new-application",
		element: <NewApplication />,
	},
	{
		path: "/modal",
		element: <Modal />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export default router;
