import React from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import FormStates from "./FormStates";

const SignInMethod = async (props) => {
  const email = FormStates("");
  const password = FormStates("");
  const firebase = useFirebaseApp();

  const signIn = async (e) => {
    e.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.errorMessage;
        if (
          errorCode === "auth/wrong-password" ||
          errorCode === "auth/user-not-found" ||
          errorCode === "auth/user-disabled" ||
          errorCode === "auth/invalid-email"
        ) {
          alert(errorMessage);
        } else console.log(error, email);
      });

    const logeado = signIn();
    return { logeado };
  };

  return logeado;
};

export default SignInMethod;
