import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChqi0IkkMCm7IKuWPUT9cN4Srw1rFlXV0",
  authDomain: "crwn-db-2-77d18.firebaseapp.com",
  projectId: "crwn-db-2-77d18",
  storageBucket: "crwn-db-2-77d18.appspot.com",
  messagingSenderId: "618234479184",
  appId: "1:618234479184:web:7972d30b9525c75d5a4755",
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error(error);
    }
  }

  return userRef;
};

export default firebase;
