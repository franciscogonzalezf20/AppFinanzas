
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./Login";
import FinancialDashboard from "./FinancialDashboard";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("auth") === "true");
  }, []);

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/" />} />
        <Route path="/" element={isAuthenticated ? <FinancialDashboard onLogout={handleLogout} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}