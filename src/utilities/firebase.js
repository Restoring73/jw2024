import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCH705vsSDLcndHWCsA3vEGd02enInhCps",
  authDomain: "jiahuiwu-2024.firebaseapp.com",
  databaseURL: "https://jiahuiwu-2024-default-rtdb.firebaseio.com",
  projectId: "jiahuiwu-2024",
  storageBucket: "jiahuiwu-2024.appspot.com",
  messagingSenderId: "825184809943",
  appId: "1:825184809943:web:9a1ec99a43a376325a5192",
  measurementId: "G-NK790M9P6E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
