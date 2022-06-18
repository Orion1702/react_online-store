import React from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';

const CreateBrand = ({show, onHide}) => {
    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create new Brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Brand name" 
                        />
                    </Form>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={onHide}>Add brand</Button>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateBrand;