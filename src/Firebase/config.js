import app from 'firebase/app';
import 'firebase/firestore';


console.log(process.env)
var firebaseConfig = {
  apiKey: "AIzaSyD1zQXj5PAqdLad-oQ3OdlaVCtjl5RWhlY",
  authDomain: "joblisting-94b3e.firebaseapp.com",
  projectId: "joblisting-94b3e",
  databaseURL: "https://console.firebase.google.com/u/1/project/joblisting-94b3e/database/joblisting-94b3e-default-rtdb/data/~2F",
  storageBucket: "joblisting-94b3e.appspot.com",
  messagingSenderId: "583335008802",
  appId: "1:583335008802:web:1d0797df848aabd901887b",
  measurementId: "G-15SHF9PKQ6"
  };

  // Initialize Firebase
  const firebase=app.initializeApp(firebaseConfig);
  const firestore=firebase.firestore();

  export {firebase,firestore,app};
