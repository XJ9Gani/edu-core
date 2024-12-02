import React from "react";
import { useRoutes } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import SingInPage from "../pages/SingInPage";
import AllCourses from "../pages/AllCourses";
import MyCourses from "../pages/MyCourses";
import MyProfile from "../pages/MyProfile";
const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <RegistrationPage /> },
    { path: "/sing-in", element: <SingInPage /> },
    { path: "/all-courses", element: <AllCourses /> },
    { path: "/my-courses", element: <MyCourses /> },
    { path: "/my-profile", element: <MyProfile /> },
  ]);
  return routes;
};

export default AppRouter;
