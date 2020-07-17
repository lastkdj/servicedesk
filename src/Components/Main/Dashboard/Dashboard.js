import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: "teal",
    width: "270px",
    height: "100px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.background}>
      <Grid
        item
        container
        xs={12}
        style={{
          marginLeft: "60px",
          marginRight: "60px",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} style={{ padding: "40px 20px 20px 20px" }}>
          <Typography style={{ fontSize: "1.5em", fontWeight: "500" }}>
            DASHBOARD
          </Typography>
        </Grid>
        <Grid container item xs={12} style={{ padding: "20px" }} spacing={2}>
          <Grid item xs={3}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#282C34",

                padding: "20px",
              }}
            >
              <Grid item container xs={12}>
                <Grid item xs={10}>
                  <Typography
                    style={{
                      fontSize: "0.7em",
                      fontWeight: "500",
                      color: "#adb0bb",
                      marginBottom: "10px",
                    }}
                  >
                    RECENT TICKETS
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <EmailIcon style={{ color: "#adb0bb", fontSize: "2em" }} />
                </Grid>
                <Grid xs={12}>
                  <Typography
                    style={{
                      fontSize: "1.4em",
                      fontWeight: "500",
                      color: "#e6e5e8",
                    }}
                  >
                    13 New Tickets
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#282C34",
                padding: "20px",
              }}
            >
              <Grid item container xs={12}>
                <Grid item xs={10}>
                  <Typography
                    style={{
                      fontSize: "0.7em",
                      fontWeight: "500",
                      color: "#adb0bb",
                      marginBottom: "10px",
                    }}
                  >
                    NEW USERS
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <EmailIcon style={{ color: "#adb0bb", fontSize: "2em" }} />
                </Grid>
                <Grid xs={12}>
                  <Typography
                    style={{
                      fontSize: "1.4em",
                      fontWeight: "500",
                      color: "#e6e5e8",
                    }}
                  >
                    4 New Users
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#282C34",
                padding: "20px",
              }}
            >
              <Grid item container xs={12}>
                <Grid item xs={10}>
                  <Typography
                    style={{
                      fontSize: "0.7em",
                      fontWeight: "500",
                      color: "#adb0bb",
                      marginBottom: "10px",
                    }}
                  >
                    RECENT TICKETS
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <EmailIcon style={{ color: "#adb0bb", fontSize: "2em" }} />
                </Grid>
                <Grid xs={12}>
                  <Typography
                    style={{
                      fontSize: "1.4em",
                      fontWeight: "500",
                      color: "#e6e5e8",
                    }}
                  >
                    13 New Tickets
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={3}>
            <Paper
              elevation={3}
              style={{
                backgroundColor: "#282C34",
                padding: "20px",
              }}
            >
              <Grid item container xs={12}>
                <Grid item xs={10}>
                  <Typography
                    style={{
                      fontSize: "0.7em",
                      fontWeight: "500",
                      color: "#adb0bb",
                      marginBottom: "10px",
                    }}
                  >
                    RECENT TICKETS
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <EmailIcon style={{ color: "#adb0bb", fontSize: "2em" }} />
                </Grid>
                <Grid xs={12}>
                  <Typography
                    style={{
                      fontSize: "1.4em",
                      fontWeight: "500",
                      color: "#e6e5e8",
                    }}
                  >
                    13 New Tickets
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            Information
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
