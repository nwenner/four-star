import { Route } from 'react-router-dom';
import NotPermitted from './notPermitted';
import { useAuth } from './useAuth';

function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.userGroups ? (
          children
        ) : (
          <NotPermitted></NotPermitted>
        )
      }
    />
  );
}

export default PrivateRoute;