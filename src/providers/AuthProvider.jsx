import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebaese.config";

export const AuthContext = createContext(null);
// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
const googleAuthProvider=new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser]= useState(null);
    const [loading, setLoading]=useState(true);

    
    const createUser=(email,pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const signInUser=(email, pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleAuthProvider)
    }

    const logOutUser=()=>{
        return signOut(auth)

    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
           console.log(currentUser);
           setUser(currentUser);
           setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    })



    const authInfo={
        user, 
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        logOutUser,

    }
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;