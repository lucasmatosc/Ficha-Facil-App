import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAi_QTegxulKZdxjGvCRRc3mjf-Bb1RN_M",
    authDomain: "ficha-facil-e1e5e.firebaseapp.com",
    projectId: "ficha-facil-e1e5e",
    storageBucket: "ficha-facil-e1e5e.appspot.com",
    messagingSenderId: "458563431793",
    appId: "1:458563431793:web:cbc5230e5761820aac5ad0",
    measurementId: "G-5QJGP7KH86"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

export default db;