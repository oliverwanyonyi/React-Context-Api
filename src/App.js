import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Miscellaneous/Navbar";
import MealDetails from "./components/MealDetails";
import Favorite from "./components/Favorite";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
