import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 450;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    background: "#282C34",
    width: "100%",
    flexShrink: 0,

    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },

    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  papergrid: {
    padding: "10px 30px",
  },

  gridspacing: {
    margin: "10px 0px",
  },

  gridOnespacing: {
    margin: "10px 0px",
    alignItems: "center",
    justifyContent: "space-between",
  },

  buttongrid: {
    justifyContent: "flex-end",
    margin: "10px 0px",
  },

  button: {
    backgroundColor: "#8A85FF",
    color: "white",

    "&:hover": {
      backgroundColor: "#5A55DA",
    },
  },

  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#8A85FF",
        borderWidth: "2px",
      },
      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },
    },
  },

  label: {
    color: "gray",
  },
}));

export default useStyles;
