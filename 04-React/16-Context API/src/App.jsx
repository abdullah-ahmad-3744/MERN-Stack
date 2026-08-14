import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ParentRoute from "./components/ParentRoute";
import Contact from "./components/Contact";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";
import { useContext } from "react";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  function clickHandler() {
    
  }

  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route path="/" element={<ParentRoute />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
      <button
        className="cursor-pointer border border-blue-400 px-5 py-1 rounded-md"
        onClick={clickHandler}
      >
        Toggle Theme
      </button>
      <div> </div>
    </div>
  );
}

export default App;
