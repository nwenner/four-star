import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import { useAuth } from "./useAuth";

function Login() {
    const auth = useAuth();
    const history = useHistory();

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);

    async function login(event) {
        event.preventDefault();
        setLoading(true);
        try {
            let result = await auth.signin(email, pass);
            if (result) {
                setLoading(false);
                history.goBack();
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Please Login</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control 
                            type="password" 
                            placeholder="Password"
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" 
                            type="submit"
                            disabled={loading}
                            onClick={login}>
                        Log In
                    </Button>
                </Form>
            </header>

        </div>
    );
}

export default Login;
