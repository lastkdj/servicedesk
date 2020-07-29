import React, { useState, useEffect } from "react";
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
import WarningOutlinedIcon from "@material-ui/icons/WarningOutlined";
import Astro from "../../../../../Imagenes/backastro.jpg";
import { useUserList } from "../../../../Context/UserListContext";
import SimpleBackdrop from "./BackDrop/LoadingBackdrop";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
    backgroundImage: `url(${Astro})`,
  },

  button: {
    backgroundColor: "#8A85FF",
    color: "white",
    marginBottom: "10px",

    "&:hover": {
      backgroundColor: "#5A55DA",
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

const AreYouSure = () => {
  const { state, dispatch } = useUserList();
  const { deleted, selected, loading } = state;
  const classes = useStyles();

  const handleClose = () => {
    dispatch({ type: "deleted", value: false });
  };

  const onClicky = () => {
    dispatch({ type: "loading", value: true });
    if (selected !== FirebaseApp.auth().currentUser.uid) {
      const callDisable = FirebaseApp.functions().httpsCallable("callDisable");
      callDisable({ uid: selected }).then((result) => {
        var userRef = FirebaseApp.firestore().collection("users");
        userRef
          .doc(selected)
          .delete()
          .then(function () {
            dispatch({ type: "loading", value: false });
            dispatch({ type: "deleted", value: false });
            dispatch({ type: "success", value: true });
            console.log(" User Removed from existence");
          });
      });
    } else {
      dispatch({ type: "loading", value: false });
      dispatch({ type: "error", value: true });

      console.log("No te podes autosuicidar");
    }
  };

  return (
    <Dialog
      open={deleted}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        classes: { root: classes.root },
      }}
    >
      <SimpleBackdrop />
      <Grid>
        <DialogTitle
          id="alert-dialog-slide-title"
          style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)" }}
        >
          ARE YOU SURE?
        </DialogTitle>
        <DialogContent style={{ display: "flex", margin: "20px 0px" }}>
          <WarningOutlinedIcon
            style={{ margin: "10px 20px 10px 10px", color: "#F3B604" }}
          />
          <DialogContentText
            id="alert-dialog-slide-description"
            style={{ color: "white", fontWeight: "400" }}
          >
            This action will deleted the user and all the information regarding
            this entry, are you sure about this movement?...
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
              className={classes.button}
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
              className={classes.button}
              onClick={onClicky}
              disabled={loading}
            >
              Delete
            </Button>
          </Grid>
        </DialogActions>
      </Grid>
    </Dialog>
  );
};

export default AreYouSure;
