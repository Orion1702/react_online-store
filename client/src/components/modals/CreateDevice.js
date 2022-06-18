import React, { useContext, useState } from "react";
import Dropdown from 'react-bootstrap/esm/Dropdown';
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { Context } from "../..";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create new Device!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            Choose device type
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    // onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-3">
                        <Dropdown.Toggle>
                            Choose device brand
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    // onClick={() => device.setSelectedType(type)}
                                    key={brand.id}
                                >
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control className="mt-3" placeholder="Device name" type="text" />
                    <Form.Control className="mt-3" placeholder="Device price" type="number"/>
                    <Form.Control className="mt-3" type="file" />
                    <hr/>
                    <Button
                        variant="outline-secondary"
                        onClick={addInfo}
                    >Add new description</Button>
                    {info.map(i => 
                        <Row className="mt-2" key={i.number}>
                            <Col md={5}>
                                <Form.Control
                                    placeholder="Enter info title"
                                    type="text"
                                />
                            </Col>
                            <Col md={5}>
                                <Form.Control
                                    placeholder="Enter info description"
                                    type="text"
                                />
                            </Col>
                            <Col md={2}>
                                <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>Delete</Button>
                            </Col>
                        </Row>
                    )}
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={onHide}>Add Device</Button>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDevice;