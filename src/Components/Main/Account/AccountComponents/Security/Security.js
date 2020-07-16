import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ProgressBar from "../../../../Login/ProgressBar";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import { useAccount } from "../../../../Context/AccountContext";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import AlertDialog from "./AlertDialog";
import Bounce from "react-reveal/Bounce";

const useStyles = makeStyles((theme) => ({
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

  userpaper: {
    marginTop: "10px",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
    },

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
}));

const Security = (props) => {
  const { state, dispatch } = useAccount();
  const { snack, error } = state;
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [relogin, setRelogin] = React.useState(false);
  const classes = useStyles();

  const onClick = () => {
    if (password === confirmpassword) {
      FirebaseApp.auth()
        .currentUser.updatePassword(password)
        .then(function () {
          console.log("Password Updated");
          dispatch({ type: "snack", value: snack });
        })
        .catch(function (error) {
          setRelogin(true);
        });
    } else {
      dispatch({ type: "error", value: error });
    }
  };

  const handleClose = () => {
    dispatch({ type: "snack", value: snack });
  };

  const handleError = () => {
    dispatch({ type: "error", value: error });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <Grid
      item
      xs={12}
      style={{ position: "absolute", width: "1280px", top: " 23%" }}
    >
      <Bounce left when={props.value === 3}>
        <props.TabPanel
          value={props.value}
          index={3}
          className={classes.tabpanel}
        >
          <Grid container spacing={2} className={classes.userpaper}>
            <Grid container item xs={12}>
              <Paper
                elevation={3}
                style={{ backgroundColor: "#282C34", width: "100%" }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    style={{
                      padding: "13px",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    <Typography className={classes.userdetails}>
                      Change Password
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    <Grid item xs={12} lg={4} style={{ padding: "16px" }}>
                      <TextField
                        id="outlined-helperText"
                        variant="outlined"
                        required
                        label="Password"
                        type="password"
                        className={classes.root}
                        placeholder="Password"
                        onChange={(ev) => {
                          setPassword(ev.target.value);
                        }}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                          },
                          shrink: true,
                        }}
                      />
                      <Grid item xs={12} style={{ marginTop: "30px" }}>
                        <ProgressBar password={password} />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} lg={4} style={{ padding: "16px" }}>
                      <TextField
                        id="outlined-basic"
                        variant="outlined"
                        required
                        label="Confirm Password"
                        type="password"
                        className={classes.root}
                        placeholder="Confirm Password"
                        onChange={(ev) => {
                          setConfirmPassword(ev.target.value);
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
                  <Grid
                    container
                    item
                    xs={12}
                    style={{
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Grid
                      item
                      xs={2}
                      style={{
                        marginTop: "20px",
                        marginBottom: "10px",
                        marginRight: "30px",
                      }}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        color="primary"
                        className="submit"
                        onClick={onClick}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Snackbar
                open={snack}
                autoHideDuration={4000}
                onClose={handleClose}
              >
                <Alert severity="success">
                  Your Password have been updated!
                </Alert>
              </Snackbar>
              <Snackbar
                open={error}
                autoHideDuration={4000}
                onClose={handleError}
              >
                <Alert severity="error">Passwords are not the same</Alert>
              </Snackbar>
              <AlertDialog relogin={relogin} setRelogin={setRelogin} />
            </Grid>
          </Grid>
        </props.TabPanel>
      </Bounce>
    </Grid>
  );
};

export default Security;
