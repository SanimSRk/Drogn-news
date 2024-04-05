import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/authProviders.init';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const singUpAuth = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginAuthProvide = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOuts = () => {
    setLoding(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser);
        setLoding(false);
      } else {
        return () => {
          unsubscribe();
        };
      }
    });
  }, []);
  const authInof = { loding, user, singUpAuth, loginAuthProvide, logOuts };
  return (
    <AuthContext.Provider value={authInof}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
