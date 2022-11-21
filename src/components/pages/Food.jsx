import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Food = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="card" style={{ width: "18rem" }}>
            <Card.Img className="card_img" variant="top" src={img} />
            <div className="card_body">
              <Card.Title className="card_hover">
                <Link>Nho Xanh</Link>
                <div className="span_text">
                  <span>12,000₫</span>
                  <span>15,000₫</span>
                </div>
                <div className="btn">
                  <button>Chi tiết</button>
                </div>
              </Card.Title>
            </div>
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Food;
