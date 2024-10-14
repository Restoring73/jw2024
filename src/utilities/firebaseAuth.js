import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth } from './firebase';

export const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => {
      console.log(`User signed in: ${result.user.displayName}`);
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
    });
};

export const signOutUser = () => {
  signOut(auth)
    .then(() => {
      console.log('User signed out');
    })
    .catch((error) => {
      console.error("Error during sign-out:", error);
    });
};

export const useAuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return [user];
};
