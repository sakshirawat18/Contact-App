import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCi6Gh3CYHnOVnr0YIxUeDrpI3PKiWkZk",
    authDomain: "fir-project-3a504.firebaseapp.com",
    projectId: "fir-project-3a504",
    storageBucket: "fir-project-3a504.appspot.com",
    messagingSenderId: "521383113114",
    appId: "1:521383113114:web:d8c83dcf93c3f0bf2e4a23",
    measurementId: "G-YQR6MNDXQ0"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);
