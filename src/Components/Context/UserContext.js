import React, {
  useState,
  useContext,
  useMemo,
  useEffect,
  createContext,
} from "react";
import firebase from "firebase/app";
import "firebase/auth";

const UsuarioContext = createContext();

export function UserProvider(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false); //Sign in SnackBar
  const [disabled, setDisabled] = useState(false); //Sign in SnackBar
  const [wrongCred, setWrongCred] = useState(false); //Sign in SnackBar
  const [usedMail, setUsedMail] = useState(false); //Sign Up SnackBar
  const [badFormat, setBadFormat] = useState(false); //Sign Up SnackBar
  const [weakPassword, setWeakPassword] = useState(false); //Sign Up SnackBar
  const [sent, setSent] = useState(false); //Password Reset SnackBar
  const [open, setOpen] = useState(false);

  // Metodo Sign Up
  const signUp = async (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        alert("NO SALE EL MARDITO SNACKBAR");
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;

        if (errorCode === "auth/email-already-in-use") {
          setUsedMail(true);
        } else if (errorCode === "auth/invalid-email") {
          setBadFormat(true);
        } else if (errorCode === "auth/weak-password") {
          setWeakPassword(true);
        } else console.log(error);
      });
  };

  //Metodo Sign In
  const signIn = async (e) => {
    e.preventDefault();
    setOpen(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {})
      .catch(function (error) {
        var errorCode = error.code;
        if (
          errorCode === "auth/wrong-password" ||
          errorCode === "auth/user-not-found"
        ) {
          setWrongCred(true);
          setOpen(false);
        } else if (errorCode === "auth/user-disabled") {
          setDisabled(true);
          setOpen(false);
        } else if (errorCode === "auth/invalid-email") {
          setInvalidEmail(true);
          setOpen(false);
        } else console.log(error);
      });
  };

  var auth = firebase.auth();

  //Metodo Send Mail, Password Reset
  const sendMail = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        setSent(true);
      })
      .catch(function (error) {
        console.log("No se Pudo enviar el mensaje");
      });
  };

  //Input Email
  const onChangeEmail = (ev) => {
    setEmail(ev.target.value);
  };
  //Input Password
  const onChangePassword = (ev) => {
    setPassword(ev.target.value);
  };

  //Metodo Close Snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setWrongCred(false);
    setDisabled(false);
    setInvalidEmail(false);
    setUsedMail(false);
    setWeakPassword(false);
    setBadFormat(false);
    setSent(false);
  };

  const value = useMemo(() => {
    return {
      email,
      password,
      setPassword,
      onChangeEmail,
      onChangePassword,
      signUp,
      signIn,
      invalidEmail,
      disabled,
      wrongCred,
      usedMail,
      badFormat,
      weakPassword,
      sent,
      handleClose,
      sendMail,
      setWrongCred,
      setDisabled,
      setInvalidEmail,
      setUsedMail,
      setWeakPassword,
      setBadFormat,
      setSent,
      open,
      setOpen,
      setEmail,
    };
  }, [
    email,
    password,
    usedMail,
    badFormat,
    weakPassword,
    invalidEmail,
    disabled,
    wrongCred,
    sent,
    open,
  ]);

  return <UsuarioContext.Provider value={value} {...props} />;
}

export function useUsuario() {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
