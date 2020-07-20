import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  quadrapapers: {
    backgroundColor: "#282C34",
    padding: "20px",
    display: "flex",

    [theme.breakpoints.up("sm")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "10px",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "20px",
    },
  },

  papertitle: {
    fontSize: "0.7em",
    fontWeight: "500",
    color: "#adb0bb",
    marginBottom: "10px",
  },

  paperinfo: {
    fontSize: "1.2em",
    fontWeight: "500",
    color: "#e6e5e8",

    [theme.breakpoints.up("sm")]: { fontSize: "1em" },
    [theme.breakpoints.up("md")]: { fontSize: "1em" },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.4em",
    },
  },

  icongrid: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  iconbutton: {
    borderRadius: "50%",
    width: "1.3em",
    height: "1.3em",

    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "1.3em",
      height: "1.3em",
    },
    [theme.breakpoints.up("xl")]: {
      width: "2em",
      height: "2em",
    },
  },

  iconstyle: {
    fontSize: "1em",
    width: "0.7em",
    height: "0.7em",

    [theme.breakpoints.up("sm")]: {
      width: "0.7em",
      height: "0.7em",
    },
    [theme.breakpoints.up("md")]: {
      width: "0.7em",
      height: "0.7em",
    },
    [theme.breakpoints.up("lg")]: {
      width: "0.7em",
      height: "0.7em",
    },
    [theme.breakpoints.up("xl")]: {
      width: "1em",
      height: "1em",
    },
  },
}));

export default useStyles;
