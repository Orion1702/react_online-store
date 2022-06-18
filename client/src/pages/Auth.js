import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card className="col-6 p-3">
                <h2 className="text-center">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">

                    <Form.Control 
                        className="mt-3" 
                        type="email" 
                        placeholder="Enter email" 
                    />

                    <Form.Control 
                        className="mt-3" 
                        type="email" 
                        placeholder="Enter password" 
                    />
                    <Row className="d-flex justify-content-between align-items-center pl-3 pr-3">
                        {isLogin ?
                            <div>
                                No account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                            </div>
                            :
                            <div>
                                Have account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
                            </div>
                        }
                        <Button
                            variant="outline-success"
                            className="mt-3 align-self-end"
                        >
                            {isLogin ? 'Enter' : 'Registration'}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;