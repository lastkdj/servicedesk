import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FirebaseApp from "../../../../../../FireBase/FireBaseConfig";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import TextField from "@material-ui/core/TextField";
import ProgressBar from "../../../../../Login/ProgressBar";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
    display: "flex",
    padding: "20px 0px",

    justifyContent: "center",
    margin: "10px",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

const PassReset = (props) => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const classes = useStyles();

  const handleClose = () => {
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
          classes: { root: classes.root },
        }}
      >
        <Grid container xs={12}>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12} style={{ marginTop: "10px" }}>
            <ProgressBar password={password} />
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};

export default PassReset;
