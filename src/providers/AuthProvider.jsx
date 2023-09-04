import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

    const authInfo={
        user, 
        createUser,
        signInUser,
    }
    return (
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        
    );
};

export default AuthProvider;