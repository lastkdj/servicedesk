import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import Zoom from "@material-ui/core/Zoom";

const RecentProducts = () => {
  return (
    <Zoom in={true} timeout={700}>
      <Grid item xs={3}>
        <Paper
          elevation={3}
          style={{
            backgroundColor: "#282C34",

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
                  color: "#adb0bb",
                  marginBottom: "10px",
                }}
              >
                RECENT PRODUCTS
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography
                style={{
                  fontSize: "1.4em",
                  fontWeight: "500",
                  color: "#e6e5e8",
                }}
              >
                +7 New Products
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
                color: "#fff",
                backgroundColor: "#8a85ff",
                borderRadius: "50%",
                width: "2em",
                height: "2em",
              }}
            >
              <DesktopWindowsIcon
                style={{
                  fontSize: "1em",
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

export default RecentProducts;
