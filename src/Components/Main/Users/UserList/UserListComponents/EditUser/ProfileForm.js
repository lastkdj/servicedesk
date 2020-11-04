import React, { useRef, useEffect } from "react";
import ProgressBar from "../../../../../Login/ProgressBar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useEditAccount } from "../../../../../Context/EditAccount";

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

  textfield: {
    alignItems: "center",
  },
}));

const ProfileForm = (props) => {
  const { dispatch } = useEditAccount();

  const nameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    dispatch({ type: "switch", value: props.profile.disabled });
    dispatch({ type: "field", field: "email", value: props.profile.email });
    dispatch({
      type: "field",
      field: "name",
      value: props.profile.firstName,
    });
    dispatch({ type: "field", field: "job", value: props.profile.job });
    dispatch({
      type: "field",
      field: "lastname",
      value: props.profile.lastName,
    });
    dispatch({
      type: "field",
      field: "phone",
      value:
        props.profile.phonenumber === undefined
          ? ""
          : props.profile.phonenumber,
    });
    dispatch({
      type: "field",
      field: "company",
      value: props.profile.company === undefined ? "" : props.profile.company,
    });
    dispatch({
      type: "field",
      field: "department",
      value:
        props.profile.department === undefined ? "" : props.profile.department,
    });
    dispatch({
      type: "field",
      field: "country",
      value: props.profile.country === undefined ? "" : props.profile.country,
    });

    nameRef.current.value = props.profile.firstName;
    lastnameRef.current.value = props.profile.lastName;
    emailRef.current.value = props.profile.email;
  }, [props.profile]);

  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={6} md={6} lg={4} xl={4} spacing={2}>
      <Grid item container xs={12} className={classes.textfield}>
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
      <Grid item container xs={12} className={classes.textfield}>
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
      <Grid item container xs={12} className={classes.textfield}>
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
    </Grid>
  );
};

export default ProfileForm;
