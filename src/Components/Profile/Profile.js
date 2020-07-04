import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import firebase from "@firebase/app";
import "@firebase/firestore";
import { useUsuario } from "../Context/UserContext";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#5D2EAB",
    width: "200px",
  },

  logOut: {
    justifyContent: "flex-start",
  },

  placeholder: {
    color: "white",
  },
}));

const Profile = (props) => {
  const { setOpen } = useUsuario();
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const logOut = async (e) => {
    e.preventDefault();
    await firebase
      .auth()
      .signOut()
      .then(function () {
        props.history.push("/");
      });
  };

  const firestore = firebase.firestore();

  // const user = useUser();
  const classes = useStyles();

  // const getProfile = () => {
  //   console.log(
  //     user.displayName,
  //     user.email,
  //     user.photoURL,
  //     user.emailVerified,
  //     user.uid
  //   );
  // };
  const user = firebase.auth().currentUser;

  const docRef = firestore.collection("Users").doc("UID");

  const onClicky = () => {
    docRef
      .set({
        Nombre: name, //Ya viene como objeto
      })
      .then(function () {
        console.log("Success, se grabo!");
      })
      .catch(function (error) {
        console.log("Se fue a la puta", error);
      });
  };

  const getProfile = () => {
    docRef
      .get()
      .then(function (doc) {
        if (doc && doc.exists) {
          const myData = doc.data();
          setDisplayName(myData.Nombre);
        }
      })
      .catch(function (error) {
        console.log("Te fuiste de jeta mano", error);
      });
  };

  // const updateName = async () => {
  //   await user
  //     .updateProfile({
  //       displayName: `${name}`,
  //       photoURL: "",
  //     })
  //     .then(function () {
  //       setDisplayName(`${name}`);
  //     })
  //     .catch(function (error) {
  //       console.log("La cagada total");
  //     });
  // };

  useEffect(() => {
    setOpen(false);
  }, []);

  const goLogin = () => {
    props.history.push("/");
  };

  return (
    <div>
      <Grid item xs={12} className={classes.logOut}>
        <div>
          <h1 className={classes.placeholder}>Nombre : {displayName}</h1>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={logOut}
        >
          Cierra Sesion
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={getProfile}
        >
          get Sesion
        </Button>
        <InputBase
          placeholder="First Name"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoComplete="fname"
          autoFocus
          className={classes.placeholder}
          onChange={(ev) => setName(ev.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onClicky}
        >
          Cambiar Nombre
        </Button>
      </Grid>
    </div>
  );
};

export default withRouter(Profile);
