// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKk9Rgxn8Vj0krdIk9ghGg8eZHP6POlp4",
  authDomain: "react-journal-app-dc570.firebaseapp.com",
  projectId: "react-journal-app-dc570",
  storageBucket: "react-journal-app-dc570.appspot.com",
  messagingSenderId: "514581360173",
  appId: "1:514581360173:web:60f5e7eacba89d7b8a52a4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);