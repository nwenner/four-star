import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from "./useAuth";

function SignInOut() {
    const auth = useAuth();
    const history = useHistory();
    
    function handleOnClick() {
        history.push('/login');
    }

    function onSignOut() {
        auth.signout();
    }

    return (
        <Form inline className="Nav-form">
            {auth.user && 
                <div>
                    <span className="Welcome-user">Welcome {auth.user ? auth.user.attributes.email : null}</span>
                    <Button 
                        variant="warning" 
                        size="sm" 
                        onClick={onSignOut}>Sign Out</Button>
                </div>
            }
            {!auth.user &&
                <Button 
                    variant="warning" 
                    size="sm"
                    onClick={handleOnClick}>Sign In</Button>
            }
        </Form>
    );
}

export default SignInOut;

