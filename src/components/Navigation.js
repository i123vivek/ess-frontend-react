import React, { useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import logo from '../assets/icon3.jpg';
import './Navigation.css';

const Navigation = () => {
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    return (
        <Navbar expand="lg" className="Navbar-container" variant="dark" fixed="top">
            <Navbar.Brand href="/">
                <img alt="" src={logo} className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/" className="Navlink-btn">Home&nbsp; <i className="fas fa-home"></i></Nav.Link>
                    <NavDropdown title="About" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown} >
                        <NavDropdown.Item href="/">Action</NavDropdown.Item>
                        <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="/">Something</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/" className="Navlink-btn">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;