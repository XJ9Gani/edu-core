import React from "react";
import RegistrationPage from "./pages/RegistrationPage";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
