import firebase from 'firebase';
let config = {
  apiKey: "AIzaSyBg925C9a19cNpUkCdH6J3IQfSPQ7ihGtg",
  authDomain: "evotehomo.firebaseapp.com",
  databaseURL: "https://evotehomo.firebaseio.com",
  projectId: "evotehomo",
  storageBucket: "evotehomo.appspot.com",
  messagingSenderId: "901093373612",
  appId: "1:901093373612:web:395531bfd49ac1b613d109"
};
export const app = firebase.initializeApp(config);
export const db = firebase.database();
export const storageRef = firebase.storage().ref('sala/pdfs/');
export const auth = firebase.auth();