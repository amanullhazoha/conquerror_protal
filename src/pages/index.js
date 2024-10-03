import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Home";
import NotFound from "./NotFoundPage";
import Login from "./auth/Login";
import NewApplication from "./new-application/NewApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/new-application",
    element: <NewApplication />,
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
