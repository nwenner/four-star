import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Hub, Auth } from "aws-amplify";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function NavigationBar() {

    const [user, setUser] = useState(null);
    const [userGroups, setUserGroups] = useState(null);

    useEffect(() => {
        Hub.listen("auth", ({ payload: { event, data } }) => {
          switch (event) {
            case "signIn":
                getUser().then((userData) => setUser(userData));
                break;
            case "signOut":
                setUser(null);
                setUserGroups(null);
                break;
            case "signIn_failure":
                console.log("Sign in failure", data);
                break;
            default:
                break;
          }
        });
    
        getUser().then((userData) => {
          setUser(userData);
          if (userData) {
              console.log(`user: ${JSON.stringify(user)} `);
            setUserGroups(
              userData.signInUserSession.accessToken.payload["cognito:groups"]
            );
          } else {
            setUserGroups(null);
          }
        });
      }, []);
    
      function getUser() {
        return Auth.currentAuthenticatedUser()
          .then((userData) => userData)
          .catch(() => console.log("Not signed in"));
      }

    return (
        <Navbar fixed="top" sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="/main">
            Four Star 
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/main">Home</Nav.Link>
            </Nav>
            <Form inline>
                Group: {userGroups ? userGroups : null}
                <span style={{marginRight: "5px"}}>Welcome <b>{user ? user.attributes.email : null}</b></span>
                <a href="logout" className="Sign-out" onClick={() => Auth.signOut()}>Sign Out</a>
                <FormControl type="text" placeholder="Filter" className="mr-sm-2" />
            </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
