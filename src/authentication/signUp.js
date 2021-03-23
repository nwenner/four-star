import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp() {
    const [errorMessage, setErrorMessage] = useState();
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [verified, setVerified] = useState(false);
    const [code, setCode] = useState();

    async function signup(event) {
        event.preventDefault();
        try {
          let result = await Auth.signUp({
            username: username,
            password: password,
            attributes: {
              email,
            },
          });
          if (!result.userConfirmed) {
            setVerified(true);
          } else {
            console.log(`we here?`);
            const user = await Auth.signIn(username, password);
            if (user) {
                window.location.href = "/";
            }
          }
        } catch (ex) {
          setErrorMessage(ex.message);
        }
      }
    
      async function verify(event) {
        event.preventDefault();
        try {
          let result = await Auth.confirmSignUp(username, code);
          if (result) {
            const user = await Auth.signIn(username, password);
            if (user) {
                window.location.href = "/";
            }
          }
        } catch (error) {}
      }

    return (
        <div className="Create-account-labels">
        {errorMessage ? <p style={{ color: "red" }}>{errorMessage}</p> : null}
        { verified &&
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control 
                        type="input" 
                        placeholder="Code"
                        onChange={(e) => setCode(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" 
                        type="submit"
                        onClick={verify}>
                    verify
                </Button>
            </Form>
        }
        
        { !verified &&
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="input" 
                        placeholder="User Name"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formUsername">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formUsername">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" 
                        type="submit"
                        onClick={signup}>
                    Create
                </Button>
            </Form>
        }
        </div>
    );
}

export default SignUp;

