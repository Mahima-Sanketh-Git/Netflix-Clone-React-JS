
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDljVmnWx_FcV5g4P2VwQoRC-6P15hvxd4",
  authDomain: "netflix-clone-website-dacfe.firebaseapp.com",
  projectId: "netflix-clone-website-dacfe",
  storageBucket: "netflix-clone-website-dacfe.appspot.com",
  messagingSenderId: "268561362669",
  appId: "1:268561362669:web:78d175b5ba4515f98be6e4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=>{
 try {
  const res =await createUserWithEmailAndPassword(auth,email,password);
  const user = res.user;
  await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:'local',
    email,
  })
  toast.success("Successfuly created account")


 } catch (error) {
  toast.error(error.code.split('/')[1].split('-').join(" "))
 }
}


const login =async(email,password)=>{
  try {
  await signInWithEmailAndPassword(auth,email,password);
  toast.success("Login Success")

  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const logout = async ()=>{
  try {
    signOut(auth);
  } catch (error) {
    
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

export { auth, db, login, logout, signup };

