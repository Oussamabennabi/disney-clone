// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  projectId: "disneyplus-clone-a33d5",
  storageBucket: "disneyplus-clone-a33d5.appspot.com",
  messagingSenderId: "37918794208",
  appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth,provider,storage };
export default db;
