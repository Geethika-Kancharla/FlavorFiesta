import React, { useContext, createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID
};

const FirebaseContext = createContext(null);

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const firebaseAuth = getAuth(firebaseApp);

//export const useFirebase = () => { useContext(FirebaseContext) }

export const useFirebase = () => {
    const firebase = useContext(FirebaseContext);
    if (!firebase) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return firebase;
}

export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);

            }
        })
    }, [])

    const signupUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password);
    }
    const signinUserWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password);
    }

    const handleLogout = async () => {
        try {
            await signOut(firebaseAuth); // Sign out the user using Firebase's signOut method
        } catch (error) {
            console.error('Error occurred during logout:', error);
        }
    };

    const isLoggedIn = user ? true : false;

    return (
        <FirebaseContext.Provider value={{
            signupUserWithEmailAndPassword,
            signinUserWithEmailAndPassword,
            isLoggedIn,
            handleLogout
        }}>
            {props.children}
        </FirebaseContext.Provider>
    );
}