// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_O4buUp5fAkLbBx67RFvIKfldheEbbhY",
  authDomain: "fir-project-87909.firebaseapp.com",
  projectId: "fir-project-87909",
  storageBucket: "fir-project-87909.firebasestorage.app",
  messagingSenderId: "591514447555",
  appId: "1:591514447555:web:55a19be61451f916737c76",
  measurementId: "G-JKTT1V87TW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth();