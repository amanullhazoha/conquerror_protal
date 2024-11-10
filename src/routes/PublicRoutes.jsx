import Login from "@/pages/auth/Login";
import SignUp from "@/pages/auth/SignUp";
import { Outlet } from "react-router-dom";
import CheckEmail from "@/pages/auth/CheckEmail";
import ResetPassword from "@/pages/auth/ResetPassword";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import PublicRoute from "@/components/guards/PublicRoute";
import ForgotPasswordStepper from "@/pages/auth/ForgotPasswordStepper";
import PasswordResetConfirmation from "@/pages/auth/PasswordResetConfirmation";

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
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPasswordStepper />,
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
  ],
};

export default PublicRoutes;
