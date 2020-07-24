import React from "react";
import Avatar from "@material-ui/core/Avatar";
import TA from "../../../../../Imagenes/ta.jpg";
import SBC from "../../../../../Imagenes/sbc2.jpg";
import FREY from "../../../../../Imagenes/frey2.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import { useEffect } from "react";

const useStyles = makeStyles(() => ({
  quadrapapers: {
    backgroundColor: "#282C34",

    display: "flex",
  },

  titletext: {
    fontSize: "0.9em",
    fontWeight: "400",
    color: "#e6e5e8",
    alignText: "center",
  },

  ticketsdetailed: {
    fontSize: "0.7em",
    fontWeight: "400",
    color: "#e6e5e8",
    margin: "10px 10px ",
  },

  marginright: {
    padding: "0px",
    justifyContent: "center",
  },

  checkbox: {
    color: "#8A85FF",

    "&.MuiIconButton-colorInherit": {
      color: "#8A85FF",
    },

    "&.MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#8A85FF",

      "&.MuiIconButton-root:hover": {
        color: "#8A85FF",
      },

      "&.MuiIconButton-colorSecondary:hover": {
        color: "#8A85FF",
      },
    },

    "&.MuiIconButton-colorSecondary": {
      color: "#8A85FF",
    },

    "&.hover": {
      color: "#8A85FF",
    },

    "&.MuiIconButton-root:hover": {
      backgroundColor: "rgba(138, 133, 255, 0.04)",
    },
  },

  ticketgrid: {
    padding: "15px 10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#363B47",
    },
  },
}));

const RenderUsers = (props) => {
  const [checked, setChecked] = React.useState(false);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const classes = useStyles();
  return (
    <Grid
      item
      xs={12}
      container
      className={classes.ticketgrid}
      style={checked ? { backgroundColor: "rgba(138, 133, 255, 0.16)" } : null}
    >
      <Grid item>
        {" "}
        <Checkbox
          checked={checked}
          onChange={handleChecked}
          inputProps={{ "aria-label": "primary checkbox" }}
          className={classes.checkbox}
        />
      </Grid>
      <Grid item container xs={3} style={{ marginLeft: "30px" }}>
        <Grid item style={{ margin: "0px 10px" }}>
          {" "}
          <Avatar
            alt="avatar"
            src={props.user.photoUrl}
            style={{ width: "42px", height: "42px" }}
          />{" "}
        </Grid>
        <Grid>
          {" "}
          <Typography className={classes.titletext}>
            {props.user.fullname}
          </Typography>
          <Typography
            style={{
              fontSize: "0.9em",
              fontWeight: "400",
              color: "#adb0bb",
            }}
          >
            {props.user.email}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs={2} style={{ justifyContent: "center" }}>
        {" "}
        <Typography className={classes.titletext}>
          {props.user.department}
        </Typography>
      </Grid>
      <Grid
        item
        container
        xs={2}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: "30px",
        }}
      >
        {" "}
        <Typography className={classes.titletext}>
          {props.user.company}
        </Typography>
        <Avatar
          alt="avatar"
          src={
            props.user.company === "Soletanche Bachy"
              ? SBC
              : props.user.company === "Freyssinet"
              ? FREY
              : props.user.company === "Tierra Armada"
              ? TA
              : ""
          }
          style={{
            width: "42px",
            height: "42px",
            margin: "0px 10px",
          }}
        />
      </Grid>
      <Grid item container xs={2} style={{ justifyContent: "center" }}>
        {" "}
        <Typography className={classes.titletext}>Join Date</Typography>
      </Grid>{" "}
      <Grid item container xs={2} className={classes.marginright}>
        {" "}
        <Typography className={classes.titletext}>More Info</Typography>
      </Grid>{" "}
    </Grid>
  );
};

export default RenderUsers;
