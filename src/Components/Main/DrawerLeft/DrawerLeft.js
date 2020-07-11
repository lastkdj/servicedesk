import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useDash } from "../../Context/DashContext";
import useStyles from "./DrawerStyles";
import UserSection from "./Sections/UserSection";
import MenuSection from "./Sections/MenuSection";
import { useMediaQuery } from "react-responsive";

const DrawerLeft = (props) => {
  const { openLeft, setOpenLeft } = useDash();
  const classes = useStyles();

  const isMobile = useMediaQuery({ query: "(min-device-width: 960px)" });

  const toggleDrawer = () => {
    if (!isMobile) {
      setOpenLeft(false);
    }
  };
  return (
    <React.Fragment>
      <Drawer
        variant={!isMobile ? "temporary" : "permanent"}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={openLeft}
        onClose={toggleDrawer}
        ModalProps={{ BackdropProps: { invisible: !isMobile ? true : false } }}
      >
        <UserSection />
        <MenuSection />
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerLeft;
