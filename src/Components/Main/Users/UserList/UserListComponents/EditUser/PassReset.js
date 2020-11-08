import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import FirebaseApp from "../../../../../../FireBase/FireBaseConfig";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import Padlock from "../../../../../../Imagenes/padlock.svg";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  dialog: {
    width: "220px",
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
    display: "flex",
    padding: "20px",
    justifyContent: "center",
    margin: "10px",
    flexDirection: "row",
  },

  root: {
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

  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),

    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },

  button: {
    backgroundColor: "#A735FF",
    color: "white",

    "&:hover": {
      backgroundColor: "#791AC2",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const PassReset = (props) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    props.setPass(!props.pass);
  };

  const onSubmit = () => {
    FirebaseApp.auth()
      .sendPasswordResetEmail(props.email)
      .then(function () {
        setOpen(true);
      })
      .catch(function (error) {
        console.log("No se Pudo enviar el mensaje");
      });
  };

  const onClose = () => {
    setOpen(false);
    props.setPass(!props.pass);
  };

  return (
    <React.Fragment>
      <Dialog
        open={props.pass}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          classes: { root: classes.dialog },
        }}
      >
        <Grid
          container
          item
          xs={12}
          spacing={2}
          style={{ justifyContent: "center" }}
        >
          <Grid container item xs={12} style={{ justifyContent: "center" }}>
            {" "}
            <Avatar
              alt="avatar"
              className={classes.large}
              src={Padlock}
            ></Avatar>
          </Grid>

          <Grid container item xs={12} style={{ justifyContent: "center" }}>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "1.2em",
                color: "white",
              }}
            >
              Change Password
            </Typography>
          </Grid>

          <Grid
            container
            item
            xs={12}
            style={{ marginTop: "10px", justifyContent: "center" }}
          >
            <Typography
              style={{
                textAlign: "center",
                marginBottom: "10px",
                fontSize: "0.8em",
                fontWeight: "300",
              }}
            >
              This will Send a password reset email to the user
            </Typography>
            <Button
              disabled={props.loading}
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}
              onClick={onSubmit}
            >
              Send
            </Button>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={4000} onClose={onClose}>
          <Alert severity="success">Email sent</Alert>
        </Snackbar>
      </Dialog>
    </React.Fragment>
  );
};

export default PassReset;
