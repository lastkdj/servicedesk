import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Image from "../../../../Imagenes/22.jpg";
import Image2 from "../../../../Imagenes/880447.jpg";
import Image3 from "../../../../Imagenes/lucho.jpg";
import Image4 from "../../../../Imagenes/abraham_nones.png";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatargrid: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginLeft: "10px",
  },

  ticketgrid: {
    padding: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
    "&:hover": {
      backgroundColor: "#363B47",
    },
  },
}));

const RecentTicketsDetailed = () => {
  const classes = useStyles();
  return (
    <Grid item container xs={8}>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "#282C34",

          color: "white",
          width: "100%",
        }}
      >
        {" "}
        <Grid
          item
          container
          xs={12}
          style={{
            padding: "10px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Grid item xs={6}>
            {" "}
            <Typography
              style={{
                fontSize: "1.2em",
                fontWeight: "500",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Recent Tickets Detailed
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={6}
            style={{ justifyContent: "flex-end", alignItems: "center" }}
          >
            <IconButton style={{ color: "#fff" }}>
              <MoreVertIcon style={{ color: "#e6e5e8" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          style={{
            padding: "10px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Grid item container xs={3}>
            {" "}
            <Typography
              style={{
                fontSize: "1em",
                fontWeight: "500",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Description
            </Typography>
          </Grid>
          <Grid item container xs={3} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "1em",
                fontWeight: "500",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              User
            </Typography>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "1em",
                fontWeight: "500",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Type
            </Typography>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "1em",
                fontWeight: "500",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Company
            </Typography>
          </Grid>{" "}
          <Grid
            item
            container
            xs={2}
            style={{ justifyContent: "flex-end", paddingRight: "20px" }}
          >
            {" "}
            <Typography
              style={{
                fontSize: "1em",
                fontWeight: "500",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Date
            </Typography>
          </Grid>{" "}
        </Grid>
        <Grid item xs={12} container className={classes.ticketgrid}>
          <Grid item container xs={3}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Description 1
            </Typography>
          </Grid>
          <Grid item container xs={3} style={{ paddingLeft: "30px" }}>
            {" "}
            <Grid item className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image} />
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontSize: "0.9em",
                  fontWeight: "400",
                  color: "#e6e5e8",
                  margin: "10px 10px ",
                }}
              >
                Ricardo Garcia
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Type 1
            </Typography>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Company 1
            </Typography>
          </Grid>{" "}
          <Grid
            item
            container
            xs={2}
            style={{ justifyContent: "flex-end", paddingRight: "20px" }}
          >
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Date 1
            </Typography>
          </Grid>{" "}
        </Grid>
        <Grid item xs={12} container className={classes.ticketgrid}>
          <Grid item container xs={3}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Description 2
            </Typography>
          </Grid>
          <Grid item container xs={3} style={{ paddingLeft: "30px" }}>
            <Grid item className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image2} />
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontSize: "0.9em",
                  fontWeight: "400",
                  color: "#e6e5e8",
                  margin: "10px 10px ",
                }}
              >
                Peneiro Lupirico
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Type 2
            </Typography>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Company 2
            </Typography>
          </Grid>{" "}
          <Grid
            item
            container
            xs={2}
            style={{ justifyContent: "flex-end", paddingRight: "20px" }}
          >
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Date 2
            </Typography>
          </Grid>{" "}
        </Grid>
        <Grid item xs={12} container className={classes.ticketgrid}>
          <Grid item container xs={3}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Description 3
            </Typography>
          </Grid>
          <Grid item container xs={3} style={{ paddingLeft: "30px" }}>
            <Grid item className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image3} />
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontSize: "0.9em",
                  fontWeight: "400",
                  color: "#e6e5e8",
                  margin: "10px 10px ",
                }}
              >
                Lucho Gusto
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Type 3
            </Typography>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Company 3
            </Typography>
          </Grid>{" "}
          <Grid
            item
            container
            xs={2}
            style={{ justifyContent: "flex-end", paddingRight: "20px" }}
          >
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Date 3
            </Typography>
          </Grid>{" "}
        </Grid>
        <Grid item xs={12} container className={classes.ticketgrid}>
          <Grid item container xs={3}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Description 4
            </Typography>
          </Grid>
          <Grid item container xs={3} style={{ paddingLeft: "30px" }}>
            <Grid item className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image4} />
            </Grid>
            <Grid item>
              <Typography
                style={{
                  fontSize: "0.9em",
                  fontWeight: "400",
                  color: "#e6e5e8",
                  margin: "10px 10px ",
                }}
              >
                Abraham Nones
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Type 4
            </Typography>
          </Grid>
          <Grid item container xs={2} style={{ justifyContent: "center" }}>
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Company 4
            </Typography>
          </Grid>{" "}
          <Grid
            item
            container
            xs={2}
            style={{ justifyContent: "flex-end", paddingRight: "20px" }}
          >
            {" "}
            <Typography
              style={{
                fontSize: "0.9em",
                fontWeight: "400",
                color: "#e6e5e8",
                margin: "10px 0px ",
              }}
            >
              Date 4
            </Typography>
          </Grid>{" "}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default RecentTicketsDetailed;
