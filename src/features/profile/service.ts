import { fstore } from '../../services/firebase';

export const fetchProfile = () => {
  return fstore.collection('profile').doc('personal').get();
}

export const fetchAbout = () => {
  return fstore.collection('profile').doc('about').get();
}