import firebase from 'firebase';
let config = {
  apiKey: "AIzaSyB0O0BnXhL7Rl3jYxDwGjlfyEJrlCrm4a8",
  authDomain: "evote-homo.firebaseapp.com",
  databaseURL: "https://evote-homo.firebaseio.com",
  projectId: "evote-homo",
  storageBucket: "evote-homo.appspot.com",
  messagingSenderId: "137809433290",
  appId: "1:137809433290:web:1dc633103a135839b61a33"
};
export const app = firebase.initializeApp(config);
export const db = firebase.database();
export const storageRef = firebase.storage().ref('sala/pdfs/');
export const auth = firebase.auth();