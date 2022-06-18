import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({device}) => {
    const history = useHistory()
    console.log(history)
    return(
        <Col md="3" className="mb-3" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card 
                // style={{width: 150, cursor: 'pointer'}}
                border={'light'}
            >
                <Card.Img variant="top" src={device.img} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text className="text-black-50">
                    <div>{device.rating} *</div>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default DeviceItem;