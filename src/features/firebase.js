import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY3e-G6w0oKsZXDHcQfNqiQN0YywICkMw",
  authDomain: "emeritus-2dd28.firebaseapp.com",
  databaseURL: "https://emeritus-2dd28-default-rtdb.firebaseio.com",
  projectId: "emeritus-2dd28",
  storageBucket: "emeritus-2dd28.appspot.com",
  messagingSenderId: "734427575323",
  appId: "1:734427575323:web:827e0a94b2c8dc4d0a34be",
  measurementId: "G-ESGD5QSDWZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//export firestore databse
export default getFirestore(app);
