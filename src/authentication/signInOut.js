import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "./useAuth";

function SignInOut() {
    const auth = useAuth();
    const history = useHistory();
    
    console.log(`history is as follows: ${JSON.stringify(history)}`);

    const handleOnClick = () => history.push('/login');

    return (
        <Form inline className="Nav-form">
            {auth.user && 
                <div>
                    <span className="Welcome-user">Welcome {auth.user ? auth.user.attributes.email : null}</span>
                    <Button variant="warning" size="sm" onClick={() => auth.signout()}>Sign Out</Button>
                </div>
            }
            {!auth.user &&
                <Button variant="warning" size="sm" onClick={handleOnClick}>Sign In</Button>
            }
        </Form>
    );
}

export default SignInOut;

