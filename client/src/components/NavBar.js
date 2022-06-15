import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {observer} from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white',}} to={SHOP_ROUTE}>Logo</NavLink>
                {user.isAuth ?
                    <Nav className="me-auto" style={{color: 'white',}}>
                        <Button variant="outline-light">Admin panel</Button>
                        <Button variant="outline-light" className="ml-2" onClick={() => user.setIsAuth(false)}>Exit</Button>
                    </Nav>
                :
                    <Nav className="me-auto" style={{color: 'white',}}>
                        <Button variant="outline-light" onClick={() => user.setIsAuth(true)}>Auth</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;