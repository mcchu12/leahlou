import { fstore } from '../../services/firebase';

export const fetchWorks = () => {
  const querySnapshot = fstore.collection('works').orderBy('date', 'asc').get();
  return querySnapshot;
}

export const fetchWorkImages = (name: string) => {
  const querySnapshot = fstore.collection('works').doc(name).collection('images').get();
  return querySnapshot;
}