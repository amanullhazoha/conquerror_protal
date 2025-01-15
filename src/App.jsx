import router from "./routes";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
// import { logout } from "./redux/features/auth/authSlice";

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };

  //   const handleBeforeUnload = (event) => {
  //     handleLogout();

  //     event.preventDefault();
  //     event.returnValue = "";
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return <RouterProvider router={router} />;
}

export default App;
