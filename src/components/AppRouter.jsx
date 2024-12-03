import React from "react";
import { useRoutes } from "react-router-dom";
import RegistrationPage from "../pages/RegistrationPage";
import SingInPage from "../pages/SingInPage";
import AllCourses from "../pages/AllCourses";
import MyCourses from "../pages/MyCourses";
import MyProfile from "../pages/MyProfile";
import InstructorSingIn from "../pages/InstructorSingIn";
import ProfessorProfile from "../pages/ProfessorProfile";
import ProfessorCourses from "../pages/ProfessorCourses";
const AppRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <RegistrationPage /> },
    { path: "/sing-in", element: <SingInPage /> },
    { path: "/all-courses", element: <AllCourses /> },
    { path: "/my-courses", element: <MyCourses /> },
    { path: "/my-profile", element: <MyProfile /> },
    { path: "/instructor-sing-in", element: <InstructorSingIn /> },
    { path: "/instructor-profile", element: <ProfessorProfile /> },
    { path: "/instructor-courses", element: <ProfessorCourses /> },
  ]);
  return routes;
};

export default AppRouter;
