import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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
    marginBottom: "15px",
  },

  quadrapapers: {
    backgroundColor: "#282C34",

    display: "flex",
  },

  rootcompany: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },
    },

    "&.MuiSelect-icon": {
      color: "white",
    },
    "&.MuiSelect-iconOutlined": {
      color: "white",
    },
  },

  backcompany: {
    backgroundColor: "#282C34",
    color: "white",
  },

  popupcompany: {
    color: "white",
  },

  appbar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12);",
  },

  buttonlist: {
    fontSize: "0.6em",
    "&:hover": {
      backgroundColor: "#31343D",
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:focus": {
      color: "#8A85FF",
    },

    "&:active": {
      color: "#8A85FF",
    },
    "&:active .MuiTypography-root": {
      color: "#8A85FF",
    },

    "&.PrivateTabIndicator-colorSecondary-93": {
      backgroundColor: "#8a85ff",
    },

    [theme.breakpoints.up("sm")]: {
      minWidth: "130px",
      fontSize: "0.8em",
    },

    [theme.breakpoints.up("lg")]: {
      fontSize: "0.9em",
      minWidth: "160px",
    },
  },

  tabs: {
    justifyContent: "center",

    [theme.breakpoints.up("lg")]: {
      justifyContent: "left",
    },
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const UserAppBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid item xs={12}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{ flexContainer: classes.tabs }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#8a85ff",
            },
          }}
        >
          <Tab
            label="GENERAL"
            {...a11yProps(0)}
            className={classes.buttonlist}
          />
          <Tab
            label="ORGANIZATION"
            {...a11yProps(1)}
            className={classes.buttonlist}
          />
          <Tab
            label="ASSIGNMENTS"
            {...a11yProps(2)}
            className={classes.buttonlist}
          />
          <Tab
            label="SECURITY"
            {...a11yProps(3)}
            className={classes.buttonlist}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Grid>
  );
};

export default UserAppBar;
