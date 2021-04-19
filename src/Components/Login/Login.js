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
    <div className="btn-container">
      <div className=" d-flex justify-content-center align-items-center ">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          class="btn btn-outline-warning btn-lg align-items-center google"
        >
          <span class="font-icon">
            <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
          </span>
          GOOGLE SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Login;
