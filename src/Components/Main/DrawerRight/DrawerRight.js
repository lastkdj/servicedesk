import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useDash } from "../../Context/DashContext";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseDrawer from "./CloseDrawer";
import "fontsource-roboto";
import useStyles from "./DrawerStyles";

const DrawerRight = () => {
  const { openRight, setOpenRight } = useDash();
  const classes = useStyles();

  const toggleDrawer = () => {
    setOpenRight(false);
  };

  return (
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
      open={openRight}
      onClose={toggleDrawer}
    >
      <Grid container className={classes.papergrid}>
        <Grid item container xs={12} className={classes.gridOnespacing}>
          <Typography
            variant="h5"
            style={{
              color: "white",
              fontWeight: 500,
              fontFamily: "Roboto, Helvetica, Arial, sans-serif",
              fontSize: "1.2em",
            }}
          >
            Search
          </Typography>
          <CloseDrawer />
        </Grid>
        <Grid item xs={12} className={classes.gridspacing}>
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            className={classes.root}
            InputLabelProps={{
              classes: {
                root: classes.label,
              },
            }}
          />
        </Grid>
        <Grid container item xs={12} className={classes.buttongrid}>
          <Button variant="contained" classes={{ root: classes.button }}>
            Search
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default DrawerRight;
