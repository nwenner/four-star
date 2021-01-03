import { Form } from "react-bootstrap";
import { useAuth } from "./useAuth";

function SignInOut() {
    const auth = useAuth();

    return (
        <Form inline className="Nav-form">
            {auth.user && 
                <div>
                    <span className="Welcome-user">Welcome {auth.user ? auth.user.attributes.email : null}</span>
                    <a href="/main" className="Sign-out" onClick={() => auth.signout()}>Sign Out</a>
                </div>
            }
            {!auth.user &&
                <a href="/login" className="Sign-out">Sign In</a>
            }
        </Form>
    );
}

export default SignInOut;

