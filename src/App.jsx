import React from "react";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/sing-in" && location.pathname !== "/" && (
        <Header />
      )}
      <AppRouter />
    </>
  );
};

export default App;
