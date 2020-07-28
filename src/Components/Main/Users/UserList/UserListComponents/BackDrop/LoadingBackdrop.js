import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useUserList } from "../../../../../Context/UserListContext";

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
  const { state } = useUserList();
  const { loading } = state;
  const classes = useStyles();

  return (
    <div>
      {loading ? (
        <CircularProgress thickness={5} className={classes.backdrop} />
      ) : null}
    </div>
  );
};

export default SimpleBackdrop;
