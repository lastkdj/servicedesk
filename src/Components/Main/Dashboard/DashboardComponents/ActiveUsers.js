import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import EmojiEmotionsRoundedIcon from "@material-ui/icons/EmojiEmotionsRounded";
import IconButton from "@material-ui/core/IconButton";
import Zoom from "@material-ui/core/Zoom";
const ActiveUsers = () => {
  return (
    <Zoom in={true} timeout={900}>
      <Grid item xs={3}>
        <Paper
          elevation={3}
          style={{
            backgroundColor: "#8a85ff",

            padding: "20px",
            display: "flex",
          }}
        >
          <Grid item container xs={8} style={{ marginTop: "10px" }}>
            <Grid item xs={12}>
              <Typography
                style={{
                  fontSize: "0.7em",
                  fontWeight: "500",
                  color: "white",
                  marginBottom: "10px",
                }}
              >
                ACTIVE USERS
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography
                style={{
                  fontSize: "1.4em",
                  fontWeight: "500",
                  color: "white",
                }}
              >
                3 Users Online
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <IconButton
              style={{
                color: "#8a85ff",
                backgroundColor: "white",
                borderRadius: "50%",
                width: "2em",
                height: "2em",
              }}
            >
              <EmojiEmotionsRoundedIcon
                style={{
                  fontSize: "1.3em",
                  width: "1em",
                  height: "1em",
                }}
              />
            </IconButton>
          </Grid>
        </Paper>
      </Grid>
    </Zoom>
  );
};

export default ActiveUsers;
