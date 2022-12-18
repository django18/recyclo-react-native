import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, initializeFirestore} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTtwxdw_52sS8_NgVpHPsFYHQCD1HtJ2c',
  authDomain: 'recyclo-c65a8.firebaseapp.com',
  projectId: 'recyclo-c65a8',
  storageBucket: 'recyclo-c65a8.appspot.com',
  messagingSenderId: '691291170848',
  appId: '1:691291170848:web:1597984584326313c27445',
};

console.log('Firebase File running again');
const firebaseApp = initializeApp(firebaseConfig);
// let firestoreDb;
// let db;
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
// console.log('Firebase DB', {db});
// db.settings({
//   experimentalAutoDetectLongPolling: true,
//   // merge: true,
//   // cacheSizeBytes: CACHE_SIZE_UNLIMITED,
// });

// export const initializeFirebaseApp = () => {
//   firebaseApp = initializeApp(firebaseConfig);
//   // firestoreDb = initializeFirestore(firebaseApp, {
//   //   experimentalAutoDetectLongPolling: true,
//   // });
//   // db = getFirestore(firebaseApp);
//   // db.settings.experimentalAutoDetectLongPolling = true;
//   // db.settings({
//   //   experimentalAutoDetectLongPolling: true,
//   //   merge: true,
//   // });
//   // console.log({firestoreDb, db});
// };

export const db = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
});

// export const getFirestoreDb = () => {
//   console.log({db});
//   // db.settings.experimentalAutoDetectLongPolling= true,
//   return db;
// };
