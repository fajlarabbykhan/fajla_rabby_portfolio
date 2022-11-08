import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<About />} />
        <Route path="projects" element={<About />} />
        <Route path="contact" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
