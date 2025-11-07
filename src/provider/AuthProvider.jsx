import React, { createContext, useEffect, useState } from 'react';
 import app from "../FireBase/firebase.config"
export const AuthContext = createContext();
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    // console.log(loading ,user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const singIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    };

    const updateUser = (updateData) => {
        return updateProfile(auth.currentUser,updateData)
    }
    
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unsubscribe();
        };
    }, []);


    const authData = {
      user,
      setUser,
      createUser,
      logOut,
      singIn,
      loading,
      setLoading,
      updateUser,
    };
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    )
};

export default AuthProvider;