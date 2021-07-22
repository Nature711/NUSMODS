import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhnMuVvxQOPF6QFwFI7wzrq1UE0Uyzl6Q",
  authDomain: "nusmods-5c06d.firebaseapp.com",
  projectId: "nusmods-5c06d",
  storageBucket: "nusmods-5c06d.appspot.com",
  messagingSenderId: "337251885816",
  appId: "1:337251885816:web:6c46d0565f37725fda910d",
};

// Initialize Firebases
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default app;
