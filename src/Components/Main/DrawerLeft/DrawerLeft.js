import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import { useDash } from "../../Context/DashContext";
import useStyles from "./DrawerStyles";
import UserSection from "./Sections/UserSection";
import MenuSection from "./Sections/MenuSection";

const DrawerLeft = (props) => {
  const { openLeft, setOpenLeft } = useDash();
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      open={openLeft}
    >
      <UserSection />
      <MenuSection />
    </Drawer>
  );
};

export default DrawerLeft;
