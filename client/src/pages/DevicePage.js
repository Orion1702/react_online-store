import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import CardImg from "react-bootstrap/esm/CardImg";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const DevicePage = () => {
    const device = {
        id: 1, 
        name: "Name device 1", 
        price: 2500, 
        rating: 5, 
        img: "https://royal-life.com.ua/files/resized/products/delonghi-rimadonna-6600.600x800.jpg.webp"
    };

    const decsription = [
        {id:1, title: 'Charactery #1', description: "lorem ipsum"},
        {id:2, title: 'Charactery #2', description: "lorem ipsum"},
        {id:3, title: 'Charactery #3', description: "lorem ipsum"},
        {id:4, title: 'Charactery #4', description: "lorem ipsum"},
    ]
    

    return (
        <Container className="mt-3">
            <Row>
                <Col md="4">
                    <CardImg src={device.img} />
                </Col>
                <Col md="4">
                    <Row className="d-flex align-items-center justify-content-between">
                        <div>
                            <h2>{device.name}</h2>
                        </div>
                        <div>
                            Raiting: {device.rating}
                        </div>
                    </Row>
                    <div>
                        {decsription.map(info => 
                            <Row key={info.id} className="">
                                <b>{info.title}: </b>
                                <span>{info.description}</span>
                            </Row>
                        )}
                    </div>
                </Col>
                <Col md="4">
                    <Card className="p-3">
                        <h3>{device.price}</h3>
                        <Button variant="success">Add to cart</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;