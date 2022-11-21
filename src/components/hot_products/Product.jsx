import "./product.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import img from "../../assets/fact_master.png";

const Product = () => {
  return (
    <Container>
      <Row>
        <div className="section-title">
          <h2>Sản phẩm của chúng tôi</h2>
        </div>
      </Row>
      <Row>
        <Col>
          <img src={img} alt="img"></img>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Product;
