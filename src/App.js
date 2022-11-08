import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AutoParts from "./pages/AutoParts";
import TalentRecruiter from "./pages/TalentRecruiter";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autoparts" element={<AutoParts />} />
        <Route path="/talentrecruiter" element={<TalentRecruiter />} />

      </Routes>
    </div>
  );
}

export default App;
