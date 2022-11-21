import "./card.css";
import { Link } from "react-router-dom";
import img from "../../assets/img.png";
import "bootstrap/dist/css/bootstrap.css";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = () => {
  return (
    // <Container>
    //   <Row>
    //     <Col>
    //       <Card className="card" style={{ width: "18rem" }}>
    //         <Card.Img className="card_img" variant="top" src={img} />
    //         <div className="card_body">
    //           <Card.Title className="card_hover">
    //             <Link>Nho Xanh</Link>
    //             <div className="span_text">
    //               <span>12,000₫</span>
    //               <span>15,000₫</span>
    //             </div>
    //             <div className="btn">
    //               <button>Chi tiết</button>
    //             </div>
    //           </Card.Title>
    //         </div>
    //       </Card>
    //     </Col>
    //     <Col></Col>
    //     <Col></Col>
    //     <Col></Col>
    //   </Row>
    // </Container>
    <Link to="/details">
      <div class="card">
        <img src={img} alt=""></img>
        <div class="card_content">
          <p class="card_text">
            <Link href="#" class="card_link">
              Nho Xanh
            </Link>
          </p>
          <p class="card_text">
            <span class="money money_sale">12,000₫</span>{" "}
            <span class="money">15,000₫</span>
          </p>
          <div class="detail">
            <Link href="#" class="detail_link">
              Chi Tiết
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Cards;
