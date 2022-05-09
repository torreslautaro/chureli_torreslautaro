import { initializeApp, firebase } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBlN0jdXUfJtU_4zNR2QJlrEVJu2zG_jGg",
  authDomain: "chureli.firebaseapp.com",
  projectId: "chureli",
  storageBucket: "chureli.appspot.com",
  messagingSenderId: "865043452221",
  appId: "1:865043452221:web:ae13921eeb212589367554"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db