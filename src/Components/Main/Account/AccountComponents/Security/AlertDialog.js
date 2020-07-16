import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setRelogin(false);
  };

  const onClicky = () => {
    FirebaseApp.auth().signOut();
    props.history.push("/");
  };

  return (
    <div>
      <Dialog
        open={props.relogin}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          classes: { root: classes.root },
        }}
      >
        <DialogTitle id="alert-dialog-slide-title">IMPORTANT</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{ color: "white" }}
          >
            This operation is sensitive and requires recent authentication. Log
            in again before retrying this request.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Grid
            item
            xs={3}
            style={{
              marginLeft: "10px",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              className="submit"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Grid>
          <Grid
            item
            xs={3}
            style={{
              marginLeft: "20px",
              marginRight: "10px",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              className="submit"
              onClick={onClicky}
            >
              Log In
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withRouter(AlertDialog);
