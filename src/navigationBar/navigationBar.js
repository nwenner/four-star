import { useAuth } from "../authentication/useAuth"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import SignInOut from "../authentication/signInOut";

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
                {auth.userGroups && 
                    <Nav.Link href="/admin">Admin</Nav.Link>
                }
            </Nav>
            <SignInOut></SignInOut>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
