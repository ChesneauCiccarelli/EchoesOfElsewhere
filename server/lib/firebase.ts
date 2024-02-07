import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAfosY0NVLZbxPwnMhRc8-Yn0evPp89yKM',
  authDomain: 'echoesofelsewhere-9ae1c.firebaseapp.com',
  projectId: 'echoesofelsewhere-9ae1c',
  storageBucket: 'echoesofelsewhere-9ae1c.appspot.com',
  messagingSenderId: '357527826168',
  appId: '1:357527826168:web:bb7ac84f23a145e284950d',
  measurementId: 'G-GH7B5ZWTZH',
};

const firebaseApp = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(firebaseApp);
