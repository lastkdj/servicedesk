import React, { useEffect, useState, useRef } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useAccount } from "../../../../Context/AccountContext";

import FirebaseApp from "../../../../../FireBase/FireBaseConfig";

const useStyles = makeStyles(() => ({
  userdetails: {
    color: "#e6e5e8",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "550",
    fontSize: "16px",
    lineHeight: "1.334",
  },

  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
      },

      "&.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
        color: "white",
      },

      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },

      "&.MuiSelect-icon": {
        color: "white",
      },
    },
  },

  label: {
    color: "#e6e5e8",

    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#e6e5e8",
    },
  },
}));

const ProfileForm = () => {
  const { dispatch } = useAccount();
  const [profile, setProfile] = useState({});
  const nameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const classes = useStyles();

  useEffect(() => {
    var docRef = FirebaseApp.firestore()
      .collection("users")
      .doc(FirebaseApp.auth().currentUser.uid);
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setProfile(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "field", field: "name", value: profile.firstName });
    dispatch({ type: "field", field: "lastname", value: profile.lastName });
    dispatch({
      type: "field",
      field: "phone",
      value: profile.phonenumber === undefined ? "" : profile.phonenumber,
    });
    nameRef.current.value = profile.firstName;
    lastnameRef.current.value = profile.lastName;
    phoneRef.current.value =
      profile.phonenumber === undefined ? "" : profile.phonenumber;
    emailRef.current.value = profile.email;
  }, [profile]);

  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        style={{
          padding: "13px",
        }}
      >
        <Typography className={classes.userdetails}>Profile</Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: "16px" }}>
          <TextField
            inputRef={nameRef}
            label="First Name"
            variant="outlined"
            required
            className={classes.root}
            onChange={(ev) =>
              dispatch({
                type: "field",
                field: "name",
                value: ev.target.value,
              })
            }
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: "16px" }}>
          <TextField
            inputRef={lastnameRef}
            label="Last Name"
            variant="outlined"
            required
            className={classes.root}
            onChange={(ev) =>
              dispatch({
                type: "field",
                field: "lastname",
                value: ev.target.value,
              })
            }
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          style={{ padding: "16px", marginBottom: "20px" }}
        >
          <TextField
            inputRef={emailRef}
            label="Email Address"
            variant="outlined"
            required
            placeholder="Ex sendhelp@nvm.com"
            className={classes.root}
            helperText="This is your login username"
            disabled
            // onChange={(ev) =>
            //   dispatch({
            //     type: "field",
            //     field: "email",
            //     value: ev.target.value,
            //   })
            // }
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: "16px" }}>
          <TextField
            inputRef={phoneRef}
            label="Phone Number"
            variant="outlined"
            placeholder="Ex +56949651721"
            className={classes.root}
            onChange={(ev) =>
              dispatch({
                type: "field",
                field: "phone",
                value: ev.target.value,
              })
            }
            inputProps={{
              maxLength: 15,
            }}
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ProfileForm;
