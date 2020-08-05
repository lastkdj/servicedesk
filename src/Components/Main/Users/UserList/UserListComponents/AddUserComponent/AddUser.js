import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import AddUserLoad from "./AddUserLoad";
import { useEffect } from "react";
import Summary from "./Summary";
import ProfileForm from "./ProfileForm";
import OrganizationForm from "./OrganizationForm";
import Alerts from "./Alerts";
import IconButton from "@material-ui/core/IconButton";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
    display: "flex",
    padding: "20px 0px",
    maxWidth: "1000px",
    justifyContent: "center",
    flexDirection: "row",
  },

  button: {
    backgroundColor: "#8A85FF",
    color: "white",
    marginBottom: "10px",

    "&:hover": {
      backgroundColor: "#5A55DA",
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

  textfieldroot: {
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

      "&.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
        color: "white",
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

    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#e6e5e8",
    },
  },

  icon: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1em",
    display: "flex",
  },

  rooticon: {
    color: "white",
    fontSize: "0.5em",
    padding: "0px",
    "&:hover": {
      color: "white",
      backgroundColor: "#31343D",
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

const AddUser = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const classes = useStyles();

  const handleClose = () => {
    props.setNewUser(false);
  };

  useEffect(() => {
    setError("firstload");
  }, []);

  return (
    <Dialog
      open={props.newUser}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        classes: { root: classes.root },
      }}
    >
      <AddUserLoad loading={loading} />
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        spacing={2}
        style={{ justifyContent: "center" }}
      >
        <Grid
          item
          container
          xs={12}
          style={{
            padding: "13px",
            backgroundColor: "#8a85ff",
            borderRadius: "5px",
            margin: "0px 20px",
            marginBottom: "20px",
            justifyContent: "space-between",
          }}
        >
          <Grid item>
            <Typography className={classes.userdetails}>Profile</Typography>
          </Grid>

          <Grid item className={classes.icon}>
            <IconButton
              aria-label="upload picture"
              component="span"
              classes={{ root: classes.rooticon }}
              onClick={() => {
                props.setNewUser(false);
              }}
            >
              <CloseOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          spacing={2}
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            justifyContent: "center",
            borderRadius: "5px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <ProfileForm error={error} />
          <Summary />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: "13px",

            backgroundColor: "#8a85ff",
            borderRadius: "5px",
            margin: "20px 20px",
          }}
        >
          <Typography className={classes.userdetails}>Organization</Typography>
        </Grid>
        <OrganizationForm
          error={error}
          setError={setError}
          loading={loading}
          setLoading={setLoading}
        />
      </Grid>
      <Alerts error={error} setError={setError} />
    </Dialog>
  );
};

export default AddUser;
