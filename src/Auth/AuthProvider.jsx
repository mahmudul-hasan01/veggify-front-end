import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Components/Firebase/Firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

     // start
     const [loading, setLoading] = useState(true)
     const [user, setUser] = useState(null)
     const googleProvider = new GoogleAuthProvider()

    //  signUp
     const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }
    //  login
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
    const logOut = () => {
        setLoading(true) 
        return signOut(auth)
    }
     // google
     const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
     // user
     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            console.log('CurrentUser-->', currentUser)
        })
        return () => {
            return unsubscribe
        }
    }, [])


     const authInfo = {signUp, login, user, logOut, googleSignIn, loading}
     return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
     )
   
};

export default AuthProvider;