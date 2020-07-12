import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import PicTest from "../../../../Imagenes/avatar.png";
import Button from "@material-ui/core/Button";
import Bounce from "react-reveal/Bounce";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "../Account.css";
import CountrySelect from "./CountrySelect";
import CompanySelect from "./CompanySelect";
import Switch from "@material-ui/core/Switch";
import ImageUpload from "./ImageUpload";
import FirebaseApp from "../../../../FireBase/FireBaseConfig";

const useStyles = makeStyles((theme) => ({
  avatargrid: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginTop: "16px",
  },

  small: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: "0%",
    justifySelf: "center",
    cursor: "pointer",
    transition: "0.4s",
  },

  usertext: {
    color: "#e6e5e8",
    textAlign: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "550",
    fontSize: "24px",
    lineHeight: "1.334",
    marginTop: "8px",
  },

  positiontext: {
    color: "#adb0bb",
    textAlign: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "1.334",
  },

  locationtext: {
    color: "#adb0bb",
    textAlign: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "1.334",
  },

  button: {
    backgroundColor: "#5A55DA",
    color: "white",

    "&:hover": {
      backgroundColor: "#8A85FF",
    },
  },

  submitbutton: {
    backgroundColor: "#5A55DA",
    color: "white",
    borderRadius: "5px",

    "&:hover": {
      backgroundColor: "#8A85FF",
    },
  },

  userdetails: {
    color: "#e6e5e8",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "550",
    fontSize: "16px",
    lineHeight: "1.334",
  },

  root: {
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

      "&.MuiSelect-icon": {
        color: "white",
      },
    },
  },

  label: {
    color: "#e6e5e8",
  },

  papermenu: {
    backgroundColor: "rgb(40, 44, 52)",
  },

  secondary: {
    "&.MuiSwitch-colorSecondary.Mui-checked": {
      color: "#8A85FF",
    },

    "&.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#8A85FF",
    },
  },

  userpaper: {
    marginTop: "10px",

    [theme.breakpoints.up("sm")]: {
      justifyContent: "center",
    },

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
}));

const db = FirebaseApp.firestore();

const General = (props) => {
  const [state, setState] = React.useState(true);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();

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
              <Grid container>
                <Grid item xs={12} className={classes.avatargrid}>
                  <Avatar
                    alt="avatar"
                    src={PicTest}
                    className={classes.small}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography className={classes.usertext}>
                    {props.username}
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "10px" }}>
                  <Typography className={classes.positiontext}>
                    {" "}
                    General Manager
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.locationtext}>
                    {" "}
                    Santiago, Chile
                  </Typography>
                </Grid>
                <ImageUpload />
              </Grid>
            </Paper>
          </Grid>
          <Grid container item xs={12} sm={12} md={9} lg={9}>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ backgroundColor: "#282C34" }}>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    style={{
                      padding: "13px",
                    }}
                  >
                    <Typography className={classes.userdetails}>
                      Profile
                    </Typography>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{ padding: "16px" }}
                    >
                      <TextField
                        id="outlined-helperText"
                        label="First Name"
                        variant="outlined"
                        required
                        className={classes.root}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                          },
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{ padding: "16px" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        required
                        className={classes.root}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                          },
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{ padding: "16px", marginBottom: "20px" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        required
                        placeholder="Ex sendhelp@nvm.com"
                        className={classes.root}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                          },
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{ padding: "16px" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Ex +56949651721"
                        className={classes.root}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                          },
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    style={{
                      padding: "13px",
                    }}
                  >
                    <Typography className={classes.userdetails}>
                      Organization
                    </Typography>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{ padding: "16px" }}
                    >
                      <CountrySelect />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{ padding: "16px" }}
                    >
                      <CompanySelect />
                    </Grid>
                  </Grid>
                  <Grid container item xs={12}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{ padding: "16px" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Department"
                        variant="outlined"
                        placeholder="Choose a Department"
                        className={classes.root}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                          },
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      style={{ padding: "16px" }}
                    >
                      <TextField
                        id="outlined-basic"
                        label="Job Position"
                        variant="outlined"
                        placeholder="Analyst"
                        className={classes.root}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                          },
                          shrink: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    style={{ padding: "16px" }}
                  >
                    <Grid item xs={12} style={{ color: "#e6e5e8" }}>
                      <Typography style={{ fontWeight: "500" }}>
                        Make Contact Info Public
                      </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ color: "#adb0bb" }}>
                      <Typography
                        style={{ fontWeight: "400", fontSize: "14px" }}
                      >
                        Means that anyone viewing your profile will be able to
                        see your contacts details
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        classes={{
                          colorSecondary: classes.secondary,
                          checked: classes.secondary,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={6}
                    style={{
                      padding: "16px",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    {" "}
                    <Grid item xs={5}>
                      <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        color="primary"
                        className="submit"
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
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
