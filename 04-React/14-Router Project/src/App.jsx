import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ParentRoute from "./components/ParentRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SingUp from "./pages/SignUp";
import PageNotFound from "./components/PageNotFound";
import { useState } from "react";
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<ParentRoute />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsLoggedIn= {setIsLoggedIn} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SingUp setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
