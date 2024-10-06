import PublicRoute from "@/components/guards/PublicRoute";
import CheckEmail from "@/pages/auth/CheckEmail";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Login from "@/pages/auth/Login";
import PasswordResetConfirmation from "@/pages/auth/PasswordResetConfirmation";
import ResetPassword from "@/pages/auth/ResetPassword";
import { Outlet } from "react-router-dom";

const PublicRoutes = {
	path: "/",
	element: (
		<PublicRoute>
			<Outlet />
		</PublicRoute>
	),
  children: [
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
  ]
};

export default PublicRoutes;
