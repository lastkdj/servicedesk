import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useDash } from "../../../Context/DashContext";

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
const SearchButton = () => {
  const classes = useStyles();
  const { setOpen } = useDash();

  const onClick = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <Grid item className={classes.icon}>
      <IconButton
        aria-label="upload picture"
        component="span"
        classes={{ root: classes.root }}
        onClick={onClick}
      >
        <SearchIcon />
      </IconButton>
    </Grid>
  );
};

export default SearchButton;