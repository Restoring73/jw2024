import { useEffect, useState, useCallback } from 'react';
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { database } from './firebase';

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const dbRef = ref(database, path);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      setData(snapshot.val());
    }, (error) => {
      setError(error);
    });

    return () => unsubscribe();
  }, [path]);

  return [data, error];
};


const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();

  const updateData = useCallback((value) => {
    const dbRef = ref(database, path);
    update(dbRef, value)
      .then(() => setResult(makeResult()))
      .catch((error) => setResult(makeResult(error)));
  }, [path]);

  return [updateData, result];
};
