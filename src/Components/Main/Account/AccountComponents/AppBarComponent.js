import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import General from "./General";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import Security from "./Security/Security";

const useStyles = makeStyles((theme) => ({
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

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.9em",
      minWidth: "160px",
    },
  },

  tabs: {
    justifyContent: "center",

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      justifyContent: "left",
    },

    indicator: {},
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

const AppBarComponent = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const isMobile = useMediaQuery({ query: "(max-device-width: 375px)" });
  const isSemiTab = useMediaQuery({ query: "(max-device-width: 375px)" });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item container xs={12}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          classes={{ flexContainer: classes.tabs }}
          fullWidth
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

      <General value={value} TabPanel={TabPanel} />

      <Security value={value} TabPanel={TabPanel} />

      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Grid>
  );
};

export default AppBarComponent;
