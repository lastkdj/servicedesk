import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { useDash } from "../../../Context/DashContext";

const useStyles = makeStyles((theme) => ({
  menu: {
    display: "block",
    color: "white",
    margin: "0",

    [theme.breakpoints.up("sm")]: {
      color: "white",
      margin: "0",
    },

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

const MenuButton = () => {
  const classes = useStyles();
  const { setOpenLeft } = useDash();

  const onClick = () => {
    setOpenLeft(true);
  };

  return (
    <React.Fragment>
      <MenuOutlinedIcon onClick={onClick} className={classes.menu} />
    </React.Fragment>
  );
};

export default MenuButton;
