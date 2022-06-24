import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {observer} from "mobx-react-lite";
import { NavLink, useHistory } from "react-router-dom";
import { SHOP_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white',}} to={SHOP_ROUTE}>Logo</NavLink>
                {user.isAuth ?
                    <Nav className="me-auto" style={{color: 'white',}}>
                        <Button 
                            variant="outline-light"
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >Admin panel</Button>
                        <Button 
                            variant="outline-light" 
                            className="ml-2" 
                            onClick={() => {
                                logOut()
                                history.push(SHOP_ROUTE)
                                }
                            }

                            // onClick={() => user.setIsAuth(false)}
                        >Exit</Button>
                    </Nav>
                :
                    <Nav className="me-auto" style={{color: 'white',}}>
                        <Button 
                            variant="outline-light" 
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >Auth</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar;