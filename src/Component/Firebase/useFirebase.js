import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from "../Hooks/firebase.init";

initializeFirebaseApp();
const useFirebase = () => {
  const auth = getAuth();
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // google login & sign in
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create account email and password
  const createUserEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login email and password
  const loginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // data catches in the state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  // update Name
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {});
  };

  // user logout
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return {
    user,
    setUser,
    googleSignin,
    logOut,
    createUserEmailPassword,
    loginEmailPassword,
    isLoading,
    setIsLoading,
    updateName,
    reload,
    setReload,
  };
};

export default useFirebase;
