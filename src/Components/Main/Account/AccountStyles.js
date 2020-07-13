import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    padding: "24px 0px",
    justifyContent: "center",
  },

  temporalback: {
    width: "1280",
    height: "700px",
    backgroundColor: "#1c2025",
    margin: " 0px 192px",

    [theme.breakpoints.up("sm")]: {
      width: "1280",
      height: "700px",
      backgroundColor: "#1c2025",
      margin: " 0px 10px",
    },

    [theme.breakpoints.up("md")]: {
      width: "1280",
      height: "700px",
      backgroundColor: "#1c2025",
      margin: " 0px 10px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "1280",
      height: "700px",
      backgroundColor: "#1c2025",
      margin: " 0px 192px",
    },
  },

  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },

  breadtext: {
    color: "white",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },

  breadtextbefore: {
    color: "#adb0bb",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textDecoration: "none",
  },

  settings: {
    fontSize: "1.5em",
    fontWeight: "500",
    marginBottom: "25px",
  },

  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
  },
}));

export default useStyles;
