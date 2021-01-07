import React, { useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
// import {isMobile} from 'react-device-detect';
// import { Link } from 'react-router-dom';
import logo from '../assets/icon3.jpg';
import './Navigation.css';

const Navigation = () => {
    const [showAbout, setShowAbout] = useState(false);
    const [showGallery, setShowGallery] = useState(false);

    const showAboutDropdown = (e)=>{
        setShowAbout(!showAbout);
    }
    const hideAboutDropdown = e => {
        setShowAbout(false);
    }

    const showGalleryDropdown = (e)=>{
        setShowGallery(!showGallery);
    }
    const hideGalleryDropdown = e => {
        setShowGallery(false);
    }

    return (
        <Navbar expand="lg" className="Navbar-container" variant="dark" fixed="top">
            <Navbar.Brand href="/">
                <img alt="" src={logo} className="d-inline-block align-top" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="/" className="Navlink-btn">Home</Nav.Link>
                    <NavDropdown title="About Us" id="basic-nav-dropdown" show={showAbout} onMouseEnter={showAboutDropdown} onMouseLeave={hideAboutDropdown} >
                        <NavDropdown.Item href="/">Mission & Vision</NavDropdown.Item>
                        <NavDropdown.Item href="/">Our People</NavDropdown.Item>
                        <NavDropdown.Item href="/">Group of Companies</NavDropdown.Item>
                        <NavDropdown.Item href="/">Compliances</NavDropdown.Item>
                        <NavDropdown.Item href="/">Training & Development</NavDropdown.Item>
                        <NavDropdown.Item href="/">Corporate Social Responsibility</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/" className="Navlink-btn">Services</Nav.Link>
                    <NavDropdown title="Gallery" id="basic-nav-dropdown" show={showGallery} onMouseEnter={showGalleryDropdown} onMouseLeave={hideGalleryDropdown} >
                        <NavDropdown.Item href="/">Image Gallery</NavDropdown.Item>
                        <NavDropdown.Item href="/">Video Gallery</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/" className="Navlink-btn">Blog</Nav.Link>
                    <Nav.Link href="/" className="Navlink-btn">Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;