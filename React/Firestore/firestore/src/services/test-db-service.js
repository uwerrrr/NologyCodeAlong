import { db } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const testDatabse = async () => {
  const querySnapshot = await getDocs(collection(db, 'test'));
  console.log(querySnapshot);
  querySnapshot.forEach((doc) => console.log(doc.id, doc.data()));
};
