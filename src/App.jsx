import { Route, Routes, BrowserRouter as Router, useLocation } from "react-router-dom";
import NavBar from "./componants/NavBar";
import Login from "./pages/Login";
import ModifyUsers from "./pages/ModifyUsers";
import AddUser from "./pages/AddUser";
import ModifySpecies from "./pages/ModifySpecies";
import AddSpecies from "./pages/AddSpecies";
import Unauthorized from "./pages/Unauthorized";
import "./App.css"; // Ensure this file contains the required styles
import ProtectedRoute from "./componants/AuthWrapper";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const showNavBar = location.pathname !== "/Login"; // Hide on login page

  return (
    <div className="app-container">
      {showNavBar && <NavBar />}

      {/* If no navbar, apply 'full-width' to take up full space */}
      <div className={`content ${showNavBar ? "" : "full-width"}`}>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute requiredRoles={["administrator"]}>
              <HomePage />
            </ProtectedRoute>} />

          <Route path="/Login" element={<Login />} />
        
          <Route path="/ModifyUsers" element={
            <ProtectedRoute requiredRoles={["administrator"]}>
              <ModifyUsers />
            </ProtectedRoute>} />

          <Route path="/AddUser" element={
            <ProtectedRoute requiredRoles={["administrator"]}>
              <AddUser />
            </ProtectedRoute>} />

          <Route path="/ModifySpecies" element={
            <ProtectedRoute requiredRoles={["administrator"]}>
              <ModifySpecies />
              </ProtectedRoute>} />

          <Route path="/AddSpecies" element={
            <ProtectedRoute requiredRoles={["administrator"]}>
              <AddSpecies />
            </ProtectedRoute>} />

          <Route path="/Unauthorized" element={Unauthorized}></Route>
        </Routes>
      </div>
    </div>
  );
}


export default App;
