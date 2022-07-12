import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import 'firebase/auth'; // Login firebase
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  getAuth,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = res.user;
    await addDoc(collection(db, 'Users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const sendPasswordReset = async email => {
  try {
    await sendPasswordResetEmail(firebaseAuth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(firebaseAuth);
};

export {
  firebaseAuth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
