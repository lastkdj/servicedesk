import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useAccount } from "../../../../../Context/AccountContext";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 100,
    color: "#8a85ff",
    position: "absolute",
    top: "50%",
    left: "50%",
  },

  colorPrimary: {},
}));

const SimpleBackdrop = () => {
  const classes = useStyles();

  const { state } = useAccount();
  const { loading } = state;
  //   const [open, setOpen] = React.useState(false);

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  //   const handleToggle = () => {
  //     setOpen(!open);
  //   };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button> */}
      {loading ? (
        <CircularProgress thickness="5" className={classes.backdrop} />
      ) : null}
    </div>
  );
};

export default SimpleBackdrop;
