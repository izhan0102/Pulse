import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyC-vTo_xVObbeOxq5YMTD-4mC5ek9AGsAk',
  authDomain: 'community-project-e39d9.firebaseapp.com',
  databaseURL: 'https://community-project-e39d9-default-rtdb.firebaseio.com',
  projectId: 'community-project-e39d9',
  storageBucket: 'community-project-e39d9.firebasestorage.app',
  messagingSenderId: '910011618143',
  appId: '1:910011618143:web:77ea22c5e6a0fe027c1cea',
  measurementId: 'G-55X340YG9M'
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app);
