import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { useDash } from "../../Context/DashContext";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles(() => ({
  icon: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1em",
    display: "flex",
  },

  root: {
    color: "white",
    fontSize: "0.5em",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#31343D",
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
}));
const CloseDrawer = () => {
  const classes = useStyles();
  const { setOpen } = useDash();

  const onClick = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  return (
    <Grid className={classes.icon}>
      <IconButton
        aria-label="upload picture"
        component="span"
        classes={{ root: classes.root }}
        onClick={onClick}
      >
        <CloseOutlinedIcon />
      </IconButton>
    </Grid>
  );
};

export default CloseDrawer;
