import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBrjRybKb8uPz9sLZYTQh4676RF_fQAGig',
  authDomain: 'dttm-217eb.firebaseapp.com',
  databaseURL: 'https://dttm-217eb.firebaseio.com',
  projectId: 'dttm-217eb',
  storageBucket: 'dttm-217eb.appspot.com',
  messagingSenderId: '560876576241',
  appId: '1:560876576241:web:69072a76ca517782f47850',
  measurementId: 'G-4K4LGQ87G9',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
