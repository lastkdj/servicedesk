import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import { useFirebaseApp, useUser } from "reactfire";
import { makeStyles } from "@material-ui/core/styles";

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

const Profile = () => {
  const [name, setName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const logOut = async () => {
    await firebase.auth().signOut();
  };

  const firebase = useFirebaseApp();
  const user = useUser();
  const classes = useStyles();

  const getProfile = () => {
    console.log(
      user.displayName,
      user.email,
      user.photoURL,
      user.emailVerified,
      user.uid
    );
  };

  const updateName = async () => {
    await user
      .updateProfile({
        displayName: `${name}`,
        photoURL: "",
      })
      .then(function () {
        setDisplayName(`${name}`);
        console.log("succesfull");
      })
      .catch(function (error) {
        console.log("La cagada total");
      });
  };

  return (
    <div>
      <Grid item xs={12} className={classes.logOut}>
        <div>
          <h1 className={classes.placeholder}>{displayName}</h1>
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
          onClick={updateName}
        >
          Cambiar Nombre
        </Button>
      </Grid>
    </div>
  );
};

export default Profile;
