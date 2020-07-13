import React from "react";
import Paper from "@material-ui/core/Paper";
import Bounce from "react-reveal/Bounce";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "../Account.css";
import ImageUpload from "./Form/ImageUpload";
import ProfileForm from "./Form/ProfileForm";
import OrganizationForm from "./Form/OrganizationForm";
import SubmitForm from "./Form/SubmitForm";

const useStyles = makeStyles((theme) => ({
  userpaper: {
    marginTop: "10px",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
    },

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
}));

const General = (props) => {
  const classes = useStyles();

  console.log("render marico");
  return (
    <Bounce left when={props.value === 0}>
      <props.TabPanel
        value={props.value}
        index={0}
        className={classes.tabpanel}
      >
        <Grid container spacing={2} className={classes.userpaper}>
          <Grid item xs={12} sm={8} md={3} lg={3}>
            <Paper elevation={3} style={{ backgroundColor: "#282C34" }}>
              <ImageUpload />
            </Paper>
          </Grid>
          <Grid container item xs={12} sm={12} md={9} lg={9}>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ backgroundColor: "#282C34" }}>
                <Grid container>
                  <ProfileForm />
                  <OrganizationForm />
                  <SubmitForm />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </props.TabPanel>
    </Bounce>
  );
};

export default General;
