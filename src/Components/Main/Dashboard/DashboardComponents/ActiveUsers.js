import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";
import useStyles from "./styles";

const ActiveUsers = () => {
  const classes = useStyles();
  return (
    <Zoom in={true} timeout={900}>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} style={{ order: 4 }}>
        <Paper
          elevation={3}
          className={classes.quadrapapers}
          style={{
            backgroundColor: "#8a85ff",
          }}
        >
          <Grid item container xs={8} style={{ marginTop: "10px" }}>
            <Grid item xs={12}>
              <Typography
                className={classes.papertitle}
                style={{
                  color: "white",
                }}
              >
                ACTIVE USERS
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography
                className={classes.paperinfo}
                style={{
                  color: "white",
                }}
              >
                3 Users Online
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4} className={classes.icongrid}>
            <IconButton
              className={classes.iconbutton}
              style={{
                color: "#8a85ff",
                backgroundColor: "white",
              }}
            >
              <EmojiEmotionsRoundedIcon className={classes.iconstyle} />
            </IconButton>
          </Grid>
        </Paper>
      </Grid>
    </Zoom>
  );
};

export default ActiveUsers;
