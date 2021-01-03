import React, { useState, useEffect, useContext, createContext } from "react";
import { Hub, Auth } from "aws-amplify";

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [userGroups, setUserGroups] = useState(null);
    
    const signin = async (email, password) => {
        return Auth.signIn(email, password);
    };
  
    const signout = () => {
        Auth.signOut();
    };
   
    useEffect(() => {
        Hub.listen("auth", ({ payload: { event, data } }) => {
            switch (event) {
                case "signIn":
                    getUser().then((userData) => setUser(userData));
                    break;
                case "signOut":
                    setUser(null);
                    setUserGroups(null);
                    break;
                case "signIn_failure":
                    console.log("Sign in failure", data);
                    break;
                default:
                    break;
            }
        });

        getUser().then((userData) => {
            setUser(userData);
            if (userData) {
                setUserGroups(
                    userData.signInUserSession.accessToken.payload["cognito:groups"]
                );
            } else {
                setUserGroups(null);
            }
        });

    }, []);
    
    function getUser() {
        return Auth.currentAuthenticatedUser()
            .then((userData) => userData)
            .catch(() => console.log("Not signed in"));
    }

    return {
      user,
      userGroups,
      signin,
      signout
    };
}