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
          <button className="btn_1">
            <Link to="/foodpage">hoa quả</Link>
          </button>
          <button className="btn_1">
            <Link to="/organicvegetable">thực phẩm khô</Link>
          </button>
          <button className="btn_1">
            <Link to="/vegetables">rau hữu cơ</Link>
          </button>
        </div>
      </Row>
    </Container>
  );
};

export default SubNavbar;
