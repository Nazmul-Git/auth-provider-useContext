import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebaese.config";

export const AuthContext = createContext(null);

// eslint-disable-next-line no-unused-vars
const auth = getAuth(app);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    // eslint-disable-next-line no-unused-vars
    const [user, setUser]= useState(null);
    
    const createUser=(email,pass)=>{
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const signInUser=(email, pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }

    const logOutUser=()=>{
        return signOut(auth)

    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
           console.log(currentUser);
           setUser(currentUser)
        })

        return ()=>{
            unsubscribe();
        }
    })



    const authInfo={
        user, 
        createUser,
        signInUser,
        logOutUser,

    }
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;