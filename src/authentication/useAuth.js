import React, { useState, useEffect, useContext, createContext } from "react";
import { Auth } from "aws-amplify";

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
    
    const signin = (email, password) => {
        return Auth
            .signIn(email, password)
            .then((userData) => {
                setUser(userData);
                setUserGroups(
                    userData.signInUserSession.accessToken.payload["cognito:groups"]
                );
                return userData;
            });
    };
  
    const signout = () => {
        Auth
            .signOut()
            .then(() => {
                setUser(null);
                setUserGroups(null);
            });
    };
   
    useEffect(() => {

        let active = true

        const check = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                if (active) {
                    setUser(user);
                    if (user) {
                        setUserGroups(user.signInUserSession.accessToken.payload["cognito:groups"]);
                    }
                }
            } catch (error) {
                if (active) {
                    setUser(null);
                    setUserGroups(null);
                };
            }
        }

        check()

        return () => { active = false }
    }, [setUser]);

    return {
      user,
      userGroups,
      signin,
      signout
    };
}