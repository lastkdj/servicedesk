import React, { useContext, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useAccount } from "../../../../Context/AccountContext";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import { AuthContext } from "../../../../Context/AuthContext";

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
  },
}));

const ProfileForm = () => {
  const { data } = useContext(AuthContext);
  const { dispatch } = useAccount();

  const classes = useStyles();

  useEffect(() => {
    document.getElementById("name_name").value = data.firstName;
    document.getElementById("name_lastname").value = data.lastName;
    document.getElementById("phone").value =
      data.phonenumber === "" ? "" : data.phonenumber;
    document.getElementById("email").value = data.email;
  }, [data.firstName, data.lastName, data.phonenumber, data.email]);

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
            id="name_name"
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
            id="name_lastname"
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
            id="email"
            label="Email Address"
            variant="outlined"
            required
            placeholder="Ex sendhelp@nvm.com"
            className={classes.root}
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
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: "16px" }}>
          <TextField
            id="phone"
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
