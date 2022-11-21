import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import DetailPage from "./components/DetailPage/DetailPage";
import VegetalePage from "./components/VegetablePage/Vegetables";
import OrganicPage from "./components/OrganicPage/OrganicVegetables";
import FoodPage from "./components/FoodPage/Food";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/foodpage" element={<FoodPage />} />
        <Route path="/vegetables" element={<VegetalePage />} />
        <Route path="/organicvegetable" element={<OrganicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
