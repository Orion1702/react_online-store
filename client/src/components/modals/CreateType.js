import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Form from 'react-bootstrap/Form';

const CreateType = ({show, onHide}) => {
    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create new Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Type name" 
                        />
                    </Form>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={onHide}>Add type</Button>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateType;