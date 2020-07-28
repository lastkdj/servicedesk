import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
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

const AddUser = (props) => {
  const classes = useStyles();

  const handleClose = () => {
    props.setNewUser(false);
  };

  return (
    <Dialog
      open={props.newUser}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        classes: { root: classes.root },
      }}
    >
      <Grid
        style={{
          width: "600px",
          height: "300px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "4em",
            fontWeight: "600",
            fontFamily: "roboto",
          }}
        >
          Work in Progress
        </h1>
      </Grid>
    </Dialog>
  );
};

export default AddUser;
