import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import toast from "react-hot-toast";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaUABQmLOmDSARpJ9sEf01SKQ4wRN5goQ",
  authDomain: "netfilx-clone-505eb.firebaseapp.com",
  projectId: "netfilx-clone-505eb",
  storageBucket: "netfilx-clone-505eb.appspot.com",
  messagingSenderId: "454077240134",
  appId: "1:454077240134:web:8430bbe001fbb44aa84b47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1]); // Display only 2nd element after '/'
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1]);
  }
};

const logout = async () => {
  signOut(auth);
};

export { signUp, login, logout, auth, db };
