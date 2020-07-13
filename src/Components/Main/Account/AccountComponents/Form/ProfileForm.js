import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useAccount } from "../../../../Context/AccountContext";

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
  const { state, dispatch } = useAccount();
  const { error } = state;
  const classes = useStyles();

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
            error={error}
            id="outlined-helperText"
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
            id="outlined-basic"
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
            id="outlined-basic"
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
            id="outlined-basic"
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
