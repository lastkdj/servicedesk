import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import Zoom from "@material-ui/core/Zoom";
import useStyles from "./styles";

const RecentProducts = () => {
  const classes = useStyles();
  return (
    <Zoom in={true} timeout={700}>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ order: 3 }}>
        <Paper elevation={3} className={classes.quadrapapers}>
          <Grid item container xs={8} style={{ marginTop: "10px" }}>
            <Grid item xs={12}>
              <Typography className={classes.papertitle}>
                RECENT PRODUCTS
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography className={classes.paperinfo}>
                +7 New Products
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} className={classes.icongrid}>
            <IconButton
              className={classes.iconbutton}
              style={{
                color: "white",
                backgroundColor: "#8a85ff",
              }}
            >
              <DesktopWindowsIcon className={classes.iconstyle} />
            </IconButton>
          </Grid>
        </Paper>
      </Grid>
    </Zoom>
  );
};

export default RecentProducts;
