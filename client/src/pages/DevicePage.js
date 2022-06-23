import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import CardImg from "react-bootstrap/esm/CardImg";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
    const [device, setDevice] = useState( {info: []})
    const {id} = useParams()

    useEffect( () =>{
        fetchOneDevice(id).then( data => setDevice(data))
        // .then(console.log(device))
    }, [])

    const decsription = []
    

    return (
        <Container className="mt-3">
            <Row>
                <Col md="4">
                    <CardImg src={process.env.REACT_APP_API_URL + device.img} />
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
                        {device.info.map(info => 
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