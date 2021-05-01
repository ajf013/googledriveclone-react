import firebase from 'firebase'

const firebaseConfig = {
        apiKey: "AIzaSyAEsfas8hEk1sMsFaqA3Isx-QiVfgwMPJ8",
        authDomain: "gdriveclonereact.firebaseapp.com",
        projectId: "gdriveclonereact",
        storageBucket: "gdriveclonereact.appspot.com",
        messagingSenderId: "850674800715",
        appId: "1:850674800715:web:e7631408b1164f97c295ce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }