import React from 'react';
import { Component} from 'react';
import { Navbar, Nav, Button} from 'react-bootstrap';

function Navigation() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Welcome to pariksha.in</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#aboutUs">About Us</Nav.Link>
                <Nav.Link href="#feedback">Feedback</Nav.Link>
            </Nav>
            <div>
            <Button variant="info" className="text-right">
                    Login
            </Button>
            </div>
        </Navbar>
    );
}

export default Navigation;