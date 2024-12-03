import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ProfessorHeader from "./components/ProfessorHeader";

const App = () => {
  const location = useLocation();
  const [user, setUser] = useState(localStorage.getItem("current-user"));

  useEffect(() => {
    setUser(localStorage.getItem("current-user"));
  }, [location]);
  const getStudentHeader = () => {
    return (
      location.pathname !== "/" &&
      location.pathname !== "/sing-in" &&
      location.pathname !== "/instructor-sing-in" && <Header />
    );
  };
  const getProfessorHeader = () => {
    return (
      location.pathname !== "/" &&
      location.pathname !== "/sing-in" &&
      location.pathname !== "/instructor-sing-in" && <ProfessorHeader />
    );
  };
  return (
    <>
      {user === "student" ? getStudentHeader() : getProfessorHeader()}
      <AppRouter />
    </>
  );
};

export default App;
