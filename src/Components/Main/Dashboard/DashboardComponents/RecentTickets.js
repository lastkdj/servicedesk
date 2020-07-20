import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EmailIcon from "@material-ui/icons/Email";
import Zoom from "@material-ui/core/Zoom";
import useStyles from "./styles";

const RecentTickets = () => {
  const classes = useStyles();
  return (
    <Zoom in={true}>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ order: 1 }}>
        <Paper elevation={3} className={classes.quadrapapers}>
          <Grid item container xs={8} style={{ marginTop: "10px" }}>
            <Grid item xs={12}>
              <Typography className={classes.papertitle}>
                RECENT TICKETS
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography className={classes.paperinfo}>
                13 New Tickets
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
              <EmailIcon className={classes.iconstyle} />
            </IconButton>
          </Grid>
        </Paper>
      </Grid>
    </Zoom>
  );
};

export default RecentTickets;
