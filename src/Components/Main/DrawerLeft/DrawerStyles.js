import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 256;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    background: "#282C34",
    width: "100%",
    flexShrink: 0,
    top: "65px",

    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      borderRight: "1px solid rgba(255, 255, 255, 0.12);",
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
}));

export default useStyles;
