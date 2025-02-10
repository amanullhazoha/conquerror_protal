import PublicRoute from "@/components/guards/PublicRoute";
import ScheduleInterview from "@/components/interview/ScheduleInterview";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import PublicLayout from "@/components/layouts/PublicLayout";
import { UserProfile } from "@/components/Profile/Profile";
import Transactions from "@/components/transactions/Transactions";
import CheckEmail from "@/pages/auth/CheckEmail";
import ForgotPasswordStepper from "@/pages/auth/ForgotPasswordStepper";
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
      path: "/interview",
      element: (
        <PublicLayout>
          <ScheduleInterview />
        </PublicLayout>
      ),
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
