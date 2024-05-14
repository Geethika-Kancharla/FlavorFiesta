import React, { useContext, createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

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
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const useFirebase = () => {
    const firebase = useContext(FirebaseContext);
    if (!firebase) {
        throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return firebase;
}

export const FirebaseProvider = (props) => {

    const [user, setUser] = useState(null);
    const [data, setData] = useState([]);

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

    console.log(user);

    const handleAddUserData = async (
        firstName,
        lastName,
        email,
        phoneNo,
        date,
        no,
        comments,
        profile
    ) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${profile.name}`);
        const uploadResult = await uploadBytes(imageRef, profile);
        return await addDoc(collection(firestore, 'users'), {
            firstName,
            lastName,
            phoneNo,
            date,
            no,
            comments,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
            userEmail: user.email
        })
    };

    const fetchData = async () => {
        let list = []
        try {
            const querySnapshot = await getDocs(collection(firestore, "users"));
            querySnapshot.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
            console.log(list);
        }
        catch (error) {
            console.log(error);
        }
    }

    const isLoggedIn = user ? true : false;

    const getImageURL = async (path) => {
        try {
            const fileRef = ref(storage, path); // Create a reference to the file
            const url = await getDownloadURL(fileRef); // Get the download URL
            return url;
        } catch (error) {
            console.error("Error getting download URL:", error);
            return null; // Handle the error as needed
        }
    }

    return (
        <FirebaseContext.Provider value={{
            signupUserWithEmailAndPassword,
            signinUserWithEmailAndPassword,
            isLoggedIn,
            handleLogout,
            handleAddUserData,
            user,
            fetchData,
            data,
            getImageURL
        }}>
            {props.children}
        </FirebaseContext.Provider>
    );
}