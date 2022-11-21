import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Cards from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import SubNavbar from "./components/suv_navbar/SubNavbar";
import Product from "./components/hot_products/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <SubNavbar />
      <Cards />
      <Product />
    </Router>
  );
}

export default App;
