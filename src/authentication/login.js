import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className="App">
        <header className="App-header">
            <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Please Login</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </header>

    </div>
  );
}

export default Login;
