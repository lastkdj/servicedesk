import React, { useState, useEffect, useContext } from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { useUsuario } from "../Context/UserContext";
import FirebaseApp from "../../FireBase/FireBaseConfig";

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
  const [name, setName] = useState("");

  // const onClicky = () => {
  //   const userid = FirebaseApp.auth().currentUser.uid;
  //   FirebaseApp.firestore().collection("Users").doc(userid).set({
  //     Name: name,
  //   });
  // };

  const onClicky = () => {
    FirebaseApp.auth().signOut();
  };
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12} className={classes.logOut}>
        <div>
          {/* <h1 className={classes.placeholder}>Nombre : {displayName}</h1> */}
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={onClicky}
        >
          Cierra Sesion
        </Button>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          // onClick={getProfile}
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
