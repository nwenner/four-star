import React, { useState, useEffect } from "react";
import { useAuth } from "../authentication/useAuth"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function NavigationBar() {
    const auth = useAuth();

    return (
        <Navbar fixed="top" sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="/main">
            Four Star
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/main">Home</Nav.Link>
            </Nav>
            <Form inline className="Nav-form">
                {auth.user && 
                    <div>
                        <span style={{color: 'red', marginRight: "5px"}}><b>{auth.userGroups ? 'Admin' : null}</b></span>
                        <span style={{marginRight: "5px"}}>Welcome <b>{auth.user ? auth.user.attributes.email : null}</b></span>
                        <a href="/main" className="Sign-out" onClick={() => auth.signout()}>Sign Out</a>
                    </div>
                }
                {!auth.user &&
                    <a href="/login" className="Sign-out">Sign In</a>
                }
                
                <FormControl type="text" placeholder="Filter" className="mr-sm-2" />
            </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
