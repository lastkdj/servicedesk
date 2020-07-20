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

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "10px",
    },
    [theme.breakpoints.up("xl")]: {
      marginLeft: "10px",
    },
  },

  gridpadding: {
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      paddingLeft: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "30px",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "30px",
      justifyContent: "flex-start",
    },
  },

  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    [theme.breakpoints.up("xl")]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },

  ticketgrid: {
    padding: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
    "&:hover": {
      backgroundColor: "#363B47",
    },
  },

  paperinfo: {
    fontSize: "1.2em",
    fontWeight: "500",
    color: "#e6e5e8",
    margin: "11px 0px",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "1em",
      margin: "0px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.2em",
      margin: "11px 0px",
    },
  },

  iconbutton: {
    color: "#fff",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "0px",
    },
    [theme.breakpoints.up("xl")]: {
      pdding: "12px",
    },
  },

  iconstyle: {
    color: "#e6e5e8",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem",
    },
  },

  order: {
    order: 9,
  },
}));

const RecentTicketsDetailed = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      xs={12}
      sm={12}
      md={8}
      lg={8}
      xl={8}
      className={classes.order}
    >
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
          <Grid item xs={8}>
            {" "}
            <Typography className={classes.paperinfo}>
              Recent Tickets Detailed
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={4}
            style={{ justifyContent: "flex-end", alignItems: "center" }}
          >
            <IconButton className={classes.iconbutton}>
              <MoreVertIcon className={classes.iconstyle} />
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
          <Grid item container xs={3} sm={3} md={2} lg={2} xl={3}>
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
          <Grid
            item
            container
            xs={3}
            sm={3}
            md={4}
            lg={4}
            xl={3}
            className={classes.gridpadding}
          >
            {" "}
            <Grid item className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image} className={classes.small} />
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
          <Grid item container xs={3} sm={3} md={2} lg={2} xl={3}>
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
          <Grid
            item
            container
            xs={3}
            sm={3}
            md={4}
            lg={4}
            xl={3}
            className={classes.gridpadding}
          >
            <Grid item className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image2} className={classes.small} />
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
          <Grid item container xs={3} sm={3} md={2} lg={2} xl={3}>
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
          <Grid
            item
            container
            xs={3}
            sm={3}
            md={4}
            lg={4}
            xl={3}
            className={classes.gridpadding}
          >
            <Grid item className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image3} className={classes.small} />
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
          <Grid item container xs={3} sm={3} md={2} lg={2} xl={3}>
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
          <Grid
            item
            container
            xs={3}
            sm={3}
            md={4}
            lg={4}
            xl={3}
            className={classes.gridpadding}
          >
            <Grid item className={classes.avatargrid}>
              <Avatar alt="avatar" src={Image4} className={classes.small} />
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
