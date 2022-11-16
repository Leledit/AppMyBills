import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDTnfjkDgFTwY9geL5mj703tvA-Pjccj9s',
  authDomain: 'mybills-37217.firebaseapp.com',
  projectId: 'mybills-37217',
  storageBucket: 'mybills-37217.appspot.com',
  messagingSenderId: '1028255341631',
  appId: '1:1028255341631:web:fc5dd09a779ea87c672c8a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, {
  experimentalForceLongPolling: true,
  merge: true,
});
export const db = getFirestore(app);
//{experimentalForceLongPolling: true}
