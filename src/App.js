import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signup from "./Components/Singup/Signup";
import Pets from "./Components/Pets/Pets";
import People from "./Components/People/People";
import News from "./Components/News/News";
import Contact from "./Components/Contact/Contact";
import UserSettings from "./Components/ThemeSettings/ThemeSettings";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import { useEffect, useState } from "react";
import React from "react";
import ThemeProvider from "./Components/ThemeSettings/ThemeProvider";
import ThemeContext from "./context/ThemeContext";
import Background from "./Components/Background/Background";

function App() {
  // var background = localStorage.getItem("backgroundWeb");
  debugger;
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          {/* <div className={isDarkMode === "true" ? 'container-main container-dark' : 'container-main container-white'}> */}
          {/* <div
            className={
              background !== null
                ? "container-main container-" + background
                : "container-main container-white"
            }
          > */}
          <Background>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pets" element={<Pets />} />
              <Route path="/people" element={<People />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/settings" element={<UserSettings />} />
            </Routes>
          </Background>
          {/* </div> */}
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
