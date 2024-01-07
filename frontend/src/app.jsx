import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Messaging from "./pages/Messaging";
import Project from "./pages/Project";
import Devices from "./pages/Devices";
import Development from "./pages/Development";
import Navigation from "./components/Navigation";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
// import ResponsiveAppBar from "./components/ResponsiveAppBar";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/project" element={<Project />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/development" element={<Development />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
