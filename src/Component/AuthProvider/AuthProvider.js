import React, { createContext } from "react";
import useFirebase from "../Firebase/useFirebase";
import initializeFirebaseApp from "../Hooks/firebase.init";

export const authContext = createContext();
initializeFirebaseApp();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <authContext.Provider value={allContext}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
