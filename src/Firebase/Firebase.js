// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD9mL3QCFGacyWfNpCe2Suje-vXdehhuU",
  authDomain: "todowithdb-4f411.firebaseapp.com",
  projectId: "todowithdb-4f411",
  storageBucket: "todowithdb-4f411.appspot.com",
  messagingSenderId: "930551163539",
  appId: "1:930551163539:web:fbec8d1c1341bbff1efb66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const AUTH = getAuth(app)
export { db, AUTH }