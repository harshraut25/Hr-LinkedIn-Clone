import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD-obtdAv3X1lM_FeDq5qm0z3o_XeOaQP4",
    authDomain: "hr-linkedin-webapp.firebaseapp.com",
    projectId: "hr-linkedin-webapp",
    storageBucket: "hr-linkedin-webapp.appspot.com",
    messagingSenderId: "618856270366",
    appId: "1:618856270366:web:1c785df64a33d20363bc0f"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
