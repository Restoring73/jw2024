import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import { auth, database } from './firebase';

export const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider());
};

export const signOutUser = () => signOut(auth);

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

export const useProfile = () => {
  const [user] = useAuthState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      const adminRef = ref(database, `/admins/${user.uid}`);
      onValue(adminRef, (snapshot) => {
        setIsAdmin(snapshot.exists() && snapshot.val() === true);
        setLoading(false);
      }, (error) => {
        setError(error);
        setLoading(false);
      });
    } else {
      setIsAdmin(false);
      setLoading(false);
    }
  }, [user]);

  return [{ user, isAdmin }, loading, error];
};
