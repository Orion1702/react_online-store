import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";

const Shop = () => {
    return (
        <Container>
            <Row className="pt-5">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                </Col>
            </Row>
            
            SHOP
        </Container>
    );
};

export default Shop;