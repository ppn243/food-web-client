import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/HomePage/Home";
import DetailPage from "./components/DetailPage/DetailPage";
import VegetalePage from "./components/VegetablePage/Vegetables";
import OrganicPage from "./components/OrganicPage/OrganicVegetables";
import FoodPage from "./components/FoodPage/Food";
import At10Admin from "./components/AdminForm/At10Admin";
import AdminProducts from "./pages/Admin Product/AdminProducts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailPage />} />
        <Route path="/foodpage" element={<FoodPage />} />
        <Route path="/vegetables" element={<VegetalePage />} />
        <Route path="/organicvegetable" element={<OrganicPage />} />
        <Route path="/at10admin" element={<At10Admin />} />
        <Route path="/admin-product" element={<AdminProducts />} />
      </Routes>
    </Router>
  );
}

export default App;
