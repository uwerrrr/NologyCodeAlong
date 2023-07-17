import { db } from '../../config/firebase';
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  deleteDoc,
  updateDoc,
  increment,
} from 'firebase/firestore';

export const getAllMovies = async () => {
  const collectionRef = collection(db, 'movies');
  const querySnapshot = await getDocs(collectionRef);
  // const data = querySnapshot.docs.map(doc => {
  //   const id = doc.id
  //   const data = doc.data()
  //   return {id, ...data}
  // })
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createMovie = async (data) => {
  try {
    const collectionRef = collection(db, 'movies');
    const newMovieRef = await addDoc(collectionRef, { ...data, watchCount: 1 });
    return newMovieRef;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getMovieSubscription = (callback) => {
  const collectionRef = collection(db, 'movies');
  const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
    const movieData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(movieData);
  });
  return unsubscribe;
};

export const getMovieById = async (id) => {
  const docRef = doc(db, 'movies', id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error('Document not found');
  }

  return { id: snapshot.id, ...snapshot.data() };
};

export const deleteMovieById = async (id) => {
  const docRef = doc(db, 'movies', id);
  await deleteDoc(docRef);
};

export const incrementWatchedById = async (id) => {
  const docRef = doc(db, 'movies', id);
  const updatedDoc = await updateDoc(docRef, {
    watchCount: increment(1),
  });
  return await getMovieById(id);
};
