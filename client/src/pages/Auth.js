import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const click = async () => {
        if (isLogin) {
            const response = await login(email, password)
            console.log(response)
        } else {
            const response = await registration(email, password)
            console.log(response)
        }
    }

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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Form.Control 
                        className="mt-3" 
                        type="password" 
                        placeholder="Enter password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                            onClick={click}
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