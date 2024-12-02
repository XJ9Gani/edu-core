import React from "react";
import { useRoutes } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import SingInPage from "../pages/SingInPage";
import Home from "../pages/Home";
const AppRouter = () => {
  const routes = useRoutes([
    { path: "/home", element: <Home /> },
    { path: "/", element: <RegistrationPage /> },
    { path: "/sing-in", element: <SingInPage /> },
  ]);
  return routes;
};

export default AppRouter;
