import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Aside from "./components/Aside/Aside";
import About from "./components/About/About";

import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Aside />
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutPage" element={<About />} />
        <Route path="/PortfolioPage" element={<Portfolio />} />
        <Route path="/ContactPage" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
