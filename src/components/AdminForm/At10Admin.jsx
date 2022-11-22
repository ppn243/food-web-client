import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "../HomePage/Navbar";
// import "./del-product.js"

const At10Admin = () => {
  return (
    <div>
        <Navbar />
        <Container>
            <Row>
                <Col>
                    <h1> Products </h1>
                    <Table>
                        <thead>
                            <th> ID </th>
                            <th> Name </th>
                            <th> Price </th>
                            <th> Image </th>
                            <th></th>
                        </thead>
                    </Table>
                </Col>
            </Row>
            
            <Row>
                <Col>
                    <h1>Add products</h1>
                    <input placeholder="Name" type="text" id="name"/>
                    <input placeholder="Price" type="text" id="price"/>
                    <input placeholder="Image" type="file" id="image"/>
                    <Button>
                        Save
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default At10Admin;