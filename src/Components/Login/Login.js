import React from "react";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import firebase from "firebase/app";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = { username: displayName, email: email };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="btn">
      <button onClick={handleGoogleSignIn} type="button" class="google-button">
        <span class="google-button__icon google-button__icon--plus">
          <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
        </span>
        <span class="google-button__text">Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
