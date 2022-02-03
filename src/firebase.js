import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyC7BLSOdSljx7vbwjIF585tnd0NehfGq0A",
  authDomain: "bytefix-9f0e7.firebaseapp.com",
  projectId: "bytefix-9f0e7",
  storageBucket: "bytefix-9f0e7.appspot.com",
  messagingSenderId: "290510323627",
  appId: "1:290510323627:web:07f4a78ec6fdb36b451cee",
});

export const authentication = app.auth();
export default app;

//  Connected to sampras acoount
// Chnage to sohanur gmail
