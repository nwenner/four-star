import { Redirect, Route } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ROLE_ADMIN = 'admin';

function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();

    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.userGroups ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

export default PrivateRoute;