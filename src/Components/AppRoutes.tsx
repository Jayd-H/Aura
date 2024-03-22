import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginRegister/LoginPage";
import RegisterPage from "./LoginRegister/RegisterPage";
import HomePage from "./Home/HomePage";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/forgotpassword" element={<h1>forgotpassword</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
