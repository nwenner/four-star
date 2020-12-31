import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function NavigationBar() {
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
            <a href="logout" className="Sign-out">Sign Out</a>
            <FormControl type="text" placeholder="Filter" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavigationBar;
