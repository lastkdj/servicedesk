import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Image from "../../../../Imagenes/unnamed.jpg";
import Image2 from "../../../../Imagenes/meme.jpg";
import Image3 from "../../../../Imagenes/333.jpg";
import Image4 from "../../../../Imagenes/avatar.png";

const useStyles = makeStyles((theme) => ({
  avatargrid: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },

  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },

  ticketgrid: {
    padding: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
    "&:hover": {
      backgroundColor: "#363B47",
    },
  },
}));

const Assigments = () => {
  const classes = useStyles();
  return (
    <Grid item container xs={4}>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "#282C34",
          color: "white",
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            padding: "10px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          {" "}
          <Typography
            style={{
              fontSize: "1.2em",
              fontWeight: "500",
              color: "#e6e5e8",
              margin: "11px 0px",
            }}
          >
            Assignments
          </Typography>
        </Grid>

        <Grid item xs={12} container className={classes.ticketgrid}>
          <Grid item container xs={6}>
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
          <Grid item container xs={3} style={{ justifyContent: "center" }}>
            {" "}
            <Grid item xs={4} className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image} className={classes.small} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={3}
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
          <Grid item container xs={6}>
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
          <Grid item container xs={3} style={{ justifyContent: "center" }}>
            {" "}
            <Grid item xs={4} className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image2} className={classes.small} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={3}
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
          <Grid item container xs={6}>
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
          <Grid item container xs={3} style={{ justifyContent: "center" }}>
            {" "}
            <Grid item xs={4} className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image3} className={classes.small} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={3}
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
          <Grid item container xs={6}>
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
          <Grid item container xs={3} style={{ justifyContent: "center" }}>
            {" "}
            <Grid item xs={4} className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image4} className={classes.small} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={3}
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
          <Grid item container xs={6}>
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
          <Grid item container xs={3} style={{ justifyContent: "center" }}>
            {" "}
            <Grid item xs={4} className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image4} className={classes.small} />
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={3}
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
      </Paper>
    </Grid>
  );
};

export default Assigments;
