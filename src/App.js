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
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  var isDarkMode = localStorage.getItem("isDarkMode");
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div className={isDarkMode === "true" ? 'container-main container-dark' : 'container-main container-white'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/people" element={<People />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
