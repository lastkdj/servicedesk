import React, { useRef, useEffect } from "react";
import ProgressBar from "../../../../../Login/ProgressBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useAccount } from "../../../../../Context/AccountContext";

const useStyles = makeStyles(() => ({
  textfieldroot: {
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

const ProfileForm = (props) => {
  const { dispatch, state } = useAccount();
  const { password } = state;
  const nameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (
      props.error === "auth/successfully-created" ||
      props.error === "firstload"
    ) {
      dispatch({
        type: "field",
        field: "name",
        value: "",
      });
      nameRef.current.value = "";
      dispatch({
        type: "field",
        field: "lastname",
        value: "",
      });
      lastnameRef.current.value = "";

      dispatch({
        type: "field",
        field: "email",
        value: "",
      });
      emailRef.current.value = "";
      passwordRef.current.value = "";
      dispatch({
        type: "field",
        field: "password",
        value: "",
      });
    }
  }, [props.error]);

  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={6} md={6} lg={6} xl={6} spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <TextField
          inputRef={nameRef}
          label="First Name"
          variant="outlined"
          required
          className={classes.textfieldroot}
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
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <TextField
          inputRef={lastnameRef}
          label="Last Name"
          variant="outlined"
          required
          className={classes.textfieldroot}
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
      <Grid item xs={12}>
        <TextField
          inputRef={emailRef}
          label="Email Address"
          variant="outlined"
          required
          placeholder="Ex sendhelp@nvm.com"
          className={classes.textfieldroot}
          onChange={(ev) =>
            dispatch({
              type: "field",
              field: "email",
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
      <Grid item xs={12}>
        <TextField
          inputRef={passwordRef}
          variant="outlined"
          required
          label="Password"
          type="password"
          className={classes.textfieldroot}
          placeholder="Password"
          onChange={(ev) =>
            dispatch({
              type: "field",
              field: "password",
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
      <ProgressBar password={password} />
    </Grid>
  );
};

export default ProfileForm;
