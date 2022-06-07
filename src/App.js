import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/home";
import Signup from "./Components/Singup/Signup";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
