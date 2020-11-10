import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useAccount } from "../../../../../Context/AccountContext";
import { useMediaQuery } from "react-responsive";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),

    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  },

  largepop: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },

  complogo: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    opacity: "0.8",

    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  },

  icon: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1em",
  },

  root: {
    color: "white",
    fontSize: "0.5em",
    padding: "10px",
    "&:hover": {
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },

  button: {
    backgroundColor: "#8A85FF",
    color: "white",
    textAlign: "center",
    height: "80%",

    "&:hover": {
      backgroundColor: "#5A55DA",
    },
  },

  buttonProgress: {
    color: "#8a85ff",
    position: "absolute",
  },

  order: {
    order: 3,

    [theme.breakpoints.up("xl")]: {
      order: 2,
    },
  },

  nametypo: {
    fontWeight: "500",
    fontSize: "1.2em",
    color: "white",

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em",
      height: "36px",
    },
  },

  namegrid: {
    alignItems: "flex-end",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
    [theme.breakpoints.up("lg")]: {},
  },

  description: {
    fontWeight: "400",
    fontSize: "0.6em",
    color: "#e6e5e8",
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.8em",
    },
  },
}));

const Summary = (props) => {
  const classes = useStyles();
  const isPhone = useMediaQuery({ query: "(max-device-width: 375px)" });
  const { state } = useAccount();
  const {
    email,
    name,
    lastname,
    phone,
    country,
    company,
    department,
    job,
  } = state;

  return (
    <Grid
      item
      xs={12}
      lg={8}
      xl={6}
      container
      style={{
        justifyContent: "center",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        order: 1,
      }}
    >
      <Paper
        elevation={3}
        style={{
          backgroundColor: "white",
          padding: "13px",
          width: "100%",
          background: "rgb(138,133,255)",
          background:
            "linear-gradient(58deg, rgba(138,133,255,1) 0%, rgba(127,133,255,1) 46%, rgba(94,88,228,1) 98%)",
        }}
      >
        <Grid container item xs={7}>
          <Grid container item xs={12} className={classes.namegrid}>
            <Typography className={classes.nametypo}>
              {" "}
              {name + " " + lastname}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "0.8em",
                color: "white",
                marginTop: "10px",
              }}
            >
              Job Position: {job}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={12}>
          <Grid item container xs={8} style={{ display: "block" }}>
            <Grid item xs={12} style={{ margin: "10px 0px" }}>
              <Typography className={classes.description}>
                Email: {email}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ margin: "10px 0px" }}>
              <Typography className={classes.description}>
                Phone: {phone}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ margin: "10px 0px" }}>
              <Typography className={classes.description}>
                Country: {country}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ margin: "10px 0px" }}>
              <Typography className={classes.description}>
                Company: {company}
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ margin: "10px 0px" }}>
              <Typography className={classes.description}>
                Department: {department}
              </Typography>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Summary;
