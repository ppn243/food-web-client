import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/fact_master.png";
import Button from "react-bootstrap/Button";

const DetailPage = () => {
  return (
    <Container>
      <Row>
        <div className="section-title">
          <h2>Detail Product</h2>
        </div>
      </Row>
      <Row>
        <Col>
          <img src={img} alt="img"></img>
        </Col>
        <Col>
          <h1>Nho Xanh</h1>
          <p class="card_text">
            <span class="money money_sale">12,000₫</span>{" "}
            <span class="money">15,000₫</span>
          </p>
          <p class="text_content">
            Rau cải bắp hữu cơ (Brassica oleracea nhóm Capitata) là loại rau chủ
            lực trong họ Cải (còn gọi là họ Thập tự –
            Brassicaceae/Cruciferae),có xuất xứ từ vùng Địa Trung Hải. Nó là cây
            thân thảo, sống hai năm, và là một thực vật có hoa thuộc nhóm hai lá
            mầm với các lá tạo thành một cụm đặc hình gần như hình cầu.Là một
            loại rau hữu cơ rất dễ nhận biết,khó có thể nhầm lẫn
          </p>
          <Button>Chi Tiết</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
