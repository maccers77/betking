import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeBCLYLbx7tJErFLTIMGYHY4MJYpKSbEg",
  authDomain: "react-3d787.firebaseapp.com",
  databaseURL: "https://react-3d787-default-rtdb.firebaseio.com",
  projectId: "react-3d787",
  storageBucket: "react-3d787.appspot.com",
  messagingSenderId: "99541235015",
  appId: "1:99541235015:web:2ee8d0adc616d52da5c862"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
