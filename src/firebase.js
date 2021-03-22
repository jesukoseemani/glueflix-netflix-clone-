import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNDD-5zOoxfrQ67pKVWIC_uNZs1rAOQ28",
  authDomain: "glueflix-68809.firebaseapp.com",
  projectId: "glueflix-68809",
  storageBucket: "glueflix-68809.appspot.com",
  messagingSenderId: "76850068612",
  appId: "1:76850068612:web:6a8395ccea7780db1216d1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;