import './App.css';
// import Login from './authentication/login';
import Main from './main/main';
import Container  from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" sticky="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          Four Star 
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Form inline>
            <a href="#logout" className="Sign-out">Sign Out</a>
            <FormControl type="text" placeholder="Filter" className="mr-sm-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Main></Main>
      </Container>
    </div>
  );
}

export default App;
