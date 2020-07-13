import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB8H5DCsj4E9EHWP9Zt9ZPNjXqjotzilc8",
    authDomain: "security-otniel.firebaseapp.com",
    databaseURL: "https://security-otniel.firebaseio.com",
    projectId: "security-otniel",
    storageBucket: "security-otniel.appspot.com",
    messagingSenderId: "553399678228",
    appId: "1:553399678228:web:c5988da453e671cddd3e01",
    measurementId: "G-EV78V5LH27"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('error dreating user' , error.message);
            
        }
    }
    return userRef;    
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

