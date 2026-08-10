import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import About from "./components/About";
import Support from "./components/Support";
import Labs from "./components/Labs";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import MainHaider from "./components/MainHeader";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <Navigation />

      <Routes>
        <Route path="/" element={<MainHaider/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
