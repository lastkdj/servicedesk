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
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useUserList } from "../../../../Context/UserListContext";

const useStyles = makeStyles((theme) => ({
  quadrapapers: {
    backgroundColor: "#282C34",

    display: "flex",
  },

  titletext: {
    fontSize: "0.7em",
    fontWeight: "400",
    color: "#e6e5e8",
    alignText: "center",

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {},
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.7em",
    },

    [theme.breakpoints.up("xl")]: {
      fontSize: "0.9em",
    },
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

  small: {
    width: "42px",
    height: "42px",

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "30px",
      height: "30px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "42px",
      height: "42px",
    },
  },

  companyimg: {
    width: "42px",
    height: "42px",
    margin: "0px 10px",

    [theme.breakpoints.up("sm")]: {},

    [theme.breakpoints.up("md")]: {
      width: "25px",
      height: "25px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25px",
      height: "25px",
    },

    [theme.breakpoints.up("xl")]: {
      width: "42px",
      height: "42px",
      margin: "0px 10px",
    },
  },

  button: {
    backgroundColor: "#8A85FF",
    color: "white",
    textAlign: "center",

    "&:hover": {
      backgroundColor: "#5A55DA",
    },
  },

  buttonProgress: {
    color: "#8a85ff",
    position: "absolute",
  },
}));

const RenderUsers = (props) => {
  const { dispatch, state } = useUserList();
  const { success } = state;
  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const [loading, setLoading] = useState(false);

  const isTablet = useMediaQuery({ query: "(max-device-width: 600px)" });

  useEffect(() => {
    if (success === true) {
      setChecked(false);
      props.setcheckRef(props.checkRef - 1);
    }
  }, [success]);

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

  const disableUser = () => {
    if (props.user.disabled === "false") {
      setLoading(true);
      const callDisable = FirebaseApp.functions().httpsCallable("callDisable");
      callDisable({ uid: props.user.uid }).then((result) => {
        setLoading(false);

        FirebaseApp.firestore()
          .collection("users")
          .doc(props.user.uid)
          .update({
            disabled: "true",
          })
          .then(() => {
            console.log("done, disabled");
          });
      });
    } else {
      setLoading(true);
      const callEnable = FirebaseApp.functions().httpsCallable("callEnable");
      callEnable({ uid: props.user.uid }).then((result) => {
        setLoading(false);
        FirebaseApp.firestore()
          .collection("users")
          .doc(props.user.uid)
          .update({
            disabled: "false",
          })
          .then(() => {
            console.log("done, enabled");
          });
      });
    }
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
      style={
        checked
          ? { backgroundColor: "rgba(138, 133, 255, 0.16)" }
          : props.user.disabled === "true"
          ? { backgroundColor: "rgba(255, 255, 255, 0.3)" }
          : null
      }
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
        xs={7}
        sm={5}
        md={1}
        lg={3}
        xl={3}
        style={!isTablet ? { marginLeft: "30px", cursor: "pointer" } : null}
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
            className={classes.titletext}
            style={{
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
      {!isTablet ? (
        <Grid
          item
          container
          xs={3}
          sm={3}
          md={1}
          lg={2}
          xl={2}
          style={{ justifyContent: "center" }}
        >
          {" "}
          <Typography className={classes.titletext}>
            {props.user.department}
          </Typography>
        </Grid>
      ) : null}
      {!isTablet ? (
        <Grid
          item
          container
          xs={3}
          sm={4}
          md={1}
          lg={2}
          xl={2}
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
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
            className={classes.companyimg}
          />
        </Grid>
      ) : null}
      {!isTablet ? (
        <Grid item container xs={2} style={{ justifyContent: "center" }}>
          <Typography className={classes.titletext}>
            {moment(props.user.usercreation_timeStamp).format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
          </Typography>
        </Grid>
      ) : null}

      <Grid
        item
        container
        xs={2}
        sm={2}
        md={1}
        lg={2}
        xl={2}
        className={classes.marginright}
      >
        {props.user.uid !== FirebaseApp.auth().currentUser.uid ? (
          <Tooltip
            placement="right-end"
            title={
              props.user.disabled === "true"
                ? "Enable Account"
                : "Disable Account"
            }
            arrow
          >
            <Button
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}
              style={
                ({ marginBottom: "0px" },
                props.user.disabled === "false"
                  ? { backgroundColor: "#B20453" }
                  : { backgroundColor: "#28CB00" })
              }
              onClick={disableUser}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress
                  thickness={5}
                  size={18}
                  className={classes.buttonProgress}
                />
              ) : null}
              {props.user.disabled === "true" ? "Activate" : "Disable"}
            </Button>
          </Tooltip>
        ) : null}{" "}
      </Grid>
    </Grid>
  );
};

export default RenderUsers;
