import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Miscellaneous/Navbar";
import BottomBar from "./components/Miscellaneous/BottomBar";
import MealDetails from "./components/MealDetails";
import Favorite from "./components/Favorite";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </>
  );
}

export default App;
