import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Form from 'react-bootstrap/Form';
import { createType } from "../../http/deviceAPI";

const CreateType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            onHide()
        })
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
                    Create new Type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form>
                        <Form.Control 
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder="Enter Type name" 
                        />
                    </Form>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="success" onClick={addType}>Add type</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateType;