import React from "react";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";

const useStyles = makeStyles((theme) => ({
  menuicon: {
    margin: "0 10px",
  },

  menutext: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "1.334",
    display: "flex",
    alignItems: "center",
  },

  menutexthardware: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "1em",
    lineHeight: "1.334",
    display: "flex",
    alignItems: "center",
    // marginRight: "110px",
  },

  buttonlist: {
    color: "#adb0bb",
    padding: "10px 0",
    width: "100%",
    borderRadius: "5px",
    margin: "0",
    "&:hover": {
      backgroundColor: "#31343D",
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:focus": {
      color: "#8A85FF",
    },
    "&:active .MuiTypography-root": {
      color: "#8A85FF",
    },

    "&:active .MuiSvgIcon-root": {
      color: "#8A85FF",
    },
  },

  buttonhardware: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#adb0bb",
    padding: "10px 0",
    width: "100%",
    borderRadius: "5px",
    margin: "0",
    "&:hover": {
      backgroundColor: "#31343D",
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
    "&:focus": {
      color: "#8A85FF",
    },
    "&:active .MuiTypography-root": {
      color: "#8A85FF",
    },

    "&:active .MuiSvgIcon-root": {
      color: "#8A85FF",
    },
  },

  acordionroot: {
    backgroundColor: "transparent",
    boxShadow: "none",
    margin: "0",
    "&.MuiAccordion-root:before": {
      display: "none",
    },
    "&.MuiAccordion-root.Mui-expanded": {
      margin: "0",
    },
  },

  root: {
    margin: "0px",
    width: "100%",
    padding: theme.spacing(0),
    "&.MuiAccordionSummary-root": {
      minHeight: "0",
    },
  },
}));

const Tickets = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Accordion
      square
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className={classes.acordionroot}
    >
      <AccordionSummary id="panel1d-header" className={classes.root}>
        <Button classes={{ root: classes.buttonhardware }}>
          <Grid item container xs={12} alignItems="center">
            <Grid item xs={2}>
              <EmailOutlinedIcon className={classes.menuicon} />
            </Grid>
            <Grid
              item
              container
              xs={3}
              alignItems="center"
              style={{ marginLeft: "10px" }}
            >
              <Typography className={classes.menutexthardware}>
                Tickets
              </Typography>
            </Grid>
            <Grid item container xs={6} style={{ justifyContent: "flex-end" }}>
              {expanded ? (
                <ExpandLessIcon style={{ color: "adb0bb" }} />
              ) : (
                <ExpandMoreIcon style={{ color: "adb0bb" }} />
              )}
            </Grid>
          </Grid>
        </Button>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.root }}>
        <Grid container item xs={12} alignItems="center">
          <Button classes={{ root: classes.buttonlist }}>
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              style={{ paddingLeft: "45px" }}
            >
              <Typography className={classes.menutext}>
                Recent Requests
              </Typography>
            </Grid>
          </Button>
          <Divider />
          <Button
            classes={{
              root: classes.buttonlist,
            }}
          >
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              style={{ paddingLeft: "45px" }}
            >
              <Typography className={classes.menutext}>
                Manage Tickets
              </Typography>
            </Grid>
          </Button>
          <Divider />
          <Button
            classes={{
              root: classes.buttonlist,
            }}
          >
            <Grid
              item
              container
              xs={12}
              alignItems="center"
              style={{ paddingLeft: "45px" }}
            >
              <Typography className={classes.menutext}>Edit Ticket</Typography>
            </Grid>
          </Button>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default Tickets;
