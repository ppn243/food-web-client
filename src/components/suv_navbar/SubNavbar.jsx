import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./subnavbar.css";

const SubNavbar = () => {
  return (
    <Container>
      <Row>
        <div className="section-title">
          <h2>Sản phẩm của chúng tôi</h2>
        </div>
      </Row>
      <Row>
        <div className="tab">
          <button className="active btn_1">
            <Link href="../pages/Vegetables.jsx">hoa quả</Link>
          </button>
          <button className="btn_1">
            <Link href="../pages/OrganicVegetables.jsx">thực phẩm khô</Link>
          </button>
          <button className="btn_1">
            <Link href="../pages/Food.jsx">rau hữu cơ</Link>
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default SubNavbar;
