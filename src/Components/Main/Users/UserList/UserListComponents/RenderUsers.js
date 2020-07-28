import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import TA from "../../../../../Imagenes/ta.jpg";
import SBC from "../../../../../Imagenes/sbc2.jpg";
import FREY from "../../../../../Imagenes/frey2.jpg";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import MediaCard from "./UserCard";
import Popover from "@material-ui/core/Popover";
import moment from "moment";
import AreYouSure from "./AreYouSure";
import { useUserList } from "../../../../Context/UserListContext";

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

  initials: { fontSize: "0.8em", fontWeight: "600" },
}));

const RenderUsers = (props) => {
  const { state, dispatch } = useUserList();
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleChecked = (event) => {
    if (!checked) {
      props.setcheckRef(props.checkRef + 1);
      setChecked(event.target.checked);
    } else if (!checked && props.checkRef > 0) {
      setChecked(event.target.checked);
    } else if (checked && props.checkRef > 0) {
      setChecked(event.target.checked);
      props.setcheckRef(props.checkRef - 1);
    } else {
      setChecked(event.target.checked);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    if (checked) {
      dispatch({ type: "selected", value: props.user.uid });
    }
  }, [checked]);

  useEffect(() => {
    if (props.checkRef === 1) {
      props.setDelEdit(true);
    } else if (props.checkRef === 0 || props.checkRef > 1) {
      props.setDelEdit(false);
    } else {
    }
  }, [props.checkRef]);

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
      <Grid
        item
        container
        xs={3}
        style={{ marginLeft: "30px", cursor: "pointer" }}
        onClick={handleClick}
      >
        <Grid item style={{ margin: "0px 10px" }}>
          {" "}
          <Avatar
            alt="avatar"
            src={props.user.photoUrl}
            className={classes.small}
            style={{
              backgroundColor: `${props.user.defaultAvatar}`,
              width: "42px",
              height: "42px",
            }}
          >
            <Typography className={classes.initials}>
              {props.user.firstName && props.user.lastName
                ? props.user.firstName.charAt(0) + props.user.lastName.charAt(0)
                : null}
            </Typography>
          </Avatar>
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MediaCard user={props.user} />
      </Popover>
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
        <Typography className={classes.titletext}>
          {moment(props.user.usercreation_timeStamp).format(
            "MMMM Do YYYY, h:mm:ss a"
          )}
        </Typography>
      </Grid>{" "}
      <Grid item container xs={2} className={classes.marginright}>
        {" "}
        <Typography className={classes.titletext}>More Info</Typography>
      </Grid>{" "}
      <AreYouSure currentUser={props.user.uid} checked={checked} />
    </Grid>
  );
};

export default RenderUsers;
