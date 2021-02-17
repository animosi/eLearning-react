import React, { useEffect, useState } from 'react';
import { firebase } from './firebase';

export const AuthContext = React.createContext();
//* passing state to children components
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  //* initialize firebase, when authstate changes, update context
  useEffect(() => {
    //* this is an observer
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
