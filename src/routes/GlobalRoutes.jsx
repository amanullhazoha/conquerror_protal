import { Outlet } from "react-router-dom";
import NotFound from "@/pages/NotFoundPage";

const GlobalRoutes = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "/*",
      element: <NotFound />,
    },
  ],
};

export default GlobalRoutes;
