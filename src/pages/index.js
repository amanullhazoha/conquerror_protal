import HomePage from "./Home";
import NotFound from "./NotFoundPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router;