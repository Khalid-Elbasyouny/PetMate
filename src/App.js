import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddPet from "./pages/AddPet";
import PetDetails from "./pages/PetDetails";
import Profile from "./pages/Profile";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-pet" element={<AddPet />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
