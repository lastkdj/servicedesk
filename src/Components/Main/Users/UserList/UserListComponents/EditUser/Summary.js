import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "react-responsive";
import { useEditAccount } from "../../../../../Context/EditAccount";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Male from "../../../../../../Imagenes/male.svg";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import FirebaseApp from "../../../../../../FireBase/FireBaseConfig";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Edit from "../../../../../../Imagenes/Edit.jpg";
import Edit2 from "../../../../../../Imagenes/Edit2.jpg";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import TA from "../../../../../../Imagenes/talogo2.jpg";
import SBC from "../../../../../../Imagenes/sbclogo.jpg";
import FREY from "../../../../../../Imagenes/freylogo2.jpg";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import PassReset from "./PassReset";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),

    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  },

  complogo: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    opacity: "0.8",

    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(14),
      height: theme.spacing(14),
    },
  },

  icon: {
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1em",
  },

  root: {
    color: "white",
    fontSize: "0.5em",
    padding: "10px",
    "&:hover": {
      "@media (hover: none)": {
        backgroundColor: "transparent",
      },
    },
  },

  button: {
    backgroundColor: "#8A85FF",
    color: "white",
    textAlign: "center",
    height: "80%",

    "&:hover": {
      backgroundColor: "#5A55DA",
    },
  },

  buttonProgress: {
    color: "#8a85ff",
    position: "absolute",
  },

  order: {
    order: 3,

    [theme.breakpoints.up("xl")]: {
      order: 2,
    },
  },

  nametypo: {
    fontWeight: "500",
    fontSize: "1.2em",
    color: "white",

    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5em",
      height: "36px",
    },
  },

  namegrid: {
    alignItems: "flex-end",

    [theme.breakpoints.up("lg")]: {},
  },

  description: {
    fontWeight: "400",
    fontSize: "0.6em",
    color: "#e6e5e8",
    [theme.breakpoints.up("lg")]: {
      fontSize: "0.8em",
    },
  },
}));

const Summary = (props) => {
  const classes = useStyles();
  const isPhone = useMediaQuery({ query: "(max-device-width: 375px)" });
  const { state, dispatch } = useEditAccount();
  const [pass, setPass] = useState(false);
  const [creatorData, setCreatorData] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    email,
    name,
    lastname,
    phone,
    country,
    company,
    department,
    job,
    disabled,
  } = state;

  useEffect(() => {
    console.log(props.profile.createdby);
    if (
      props.profile.createdby !== "" &&
      props.profile.createdby !== undefined
    ) {
      var docRef = FirebaseApp.firestore()
        .collection("users")
        .doc(props.profile.createdby);
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            setCreatorData(doc.data());
          } else {
            console.log("No such document!");
          }
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    }
  }, [props.profile.createdby]);

  const disableUser = () => {
    if (disabled === "false") {
      setLoading(true);
      const callDisable = FirebaseApp.functions().httpsCallable("callDisable");
      callDisable({ uid: props.profile.uid }).then((result) => {
        setLoading(false);

        FirebaseApp.firestore()
          .collection("users")
          .doc(props.profile.uid)
          .update({
            disabled: "true",
          })
          .then(() => {
            dispatch({ type: "switch", value: "true" });
          });
      });
    } else {
      setLoading(true);
      const callEnable = FirebaseApp.functions().httpsCallable("callEnable");
      callEnable({ uid: props.profile.uid }).then((result) => {
        setLoading(false);
        FirebaseApp.firestore()
          .collection("users")
          .doc(props.profile.uid)
          .update({
            disabled: "false",
          })
          .then(() => {
            dispatch({ type: "switch", value: "false" });
          });
      });
    }
  };

  const onClick = () => {
    setPass(!pass);
  };

  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      md={6}
      lg={8}
      xl={8}
      style={{
        justifyContent: "center",
        marginLeft: isPhone ? null : "10px",
        order: 1,
        padding: "25px 15px",
      }}
    >
      <Grid
        item
        container
        xs={12}
        lg={4}
        xl={4}
        style={{ justifyContent: "center", order: 2 }}
      >
        {!isPhone ? (
          <Grid
            item
            container
            xs={12}
            style={{
              justifyContent: "center",
              height: "81%",
              alignItems: "stretch",
            }}
          >
            <Paper
              elevation={3}
              style={{
                width: "95%",
                backgroundColor: "#B086FF",
                backgroundImage: `url(${Edit2})`,
              }}
            >
              <Grid
                item
                xs={12}
                container
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Avatar
                  alt="avatar"
                  className={classes.large}
                  src={
                    props.profile.photoUrl === undefined
                      ? Male
                      : props.profile.photoUrl
                  }
                ></Avatar>
              </Grid>
              <Grid
                item
                xs={12}
                container
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "15px 0px",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "400",
                    fontSize: "0.8em",
                    color: "white",
                  }}
                >
                  Status:{" "}
                  {disabled === "true" ? (
                    <Chip
                      style={{
                        backgroundColor: "rgb(178, 4, 83)",
                        color: "white",
                      }}
                      label="Disabled"
                      size="small"
                    />
                  ) : (
                    <Chip
                      style={{ backgroundColor: "#69C21A", color: "white" }}
                      label="Active"
                      size="small"
                    />
                  )}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        ) : null}
        <Grid
          item
          container
          xs={12}
          style={{
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <Paper
            elevation={3}
            style={{
              backgroundColor: "#A735FF",
              width: isPhone ? "100%" : "95%",
              alignItems: "center",
              display: "flex",
              height: "min-content",
            }}
          >
            <Grid
              item
              container
              xs={12}
              style={{
                justifyContent: "flex-end",
                margin: "0px 5px 0px 0px",
                alignItems: "center",
              }}
            >
              <IconButton
                aria-label="upload picture"
                component="span"
                classes={{ root: classes.root }}
                onClick={onClick}
              >
                <VpnKeyIcon />
              </IconButton>
              <PassReset pass={pass} setPass={setPass} />
              <IconButton
                aria-label="upload picture"
                component="span"
                classes={{ root: classes.root }}
                // onClick={onClick}
              >
                <VerifiedUserIcon />
              </IconButton>
              {props.profile.uid !== FirebaseApp.auth().currentUser.uid ? (
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.button}
                  style={
                    ({ marginBottom: "0px" },
                    disabled === "false"
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
                  {disabled === "true" ? "Enable" : "Disable"}
                </Button>
              ) : null}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        lg={8}
        xl={8}
        container
        style={{
          justifyContent: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          order: 1,
        }}
      >
        <Paper
          elevation={3}
          style={{
            backgroundColor: "white",
            padding: "13px",
            width: "100%",
            backgroundImage: `url(${Edit})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Grid container xs={12}>
            {" "}
            <Grid container item xs={7}>
              <Grid container item xs={12} className={classes.namegrid}>
                <Typography className={classes.nametypo}>
                  {" "}
                  {name + " " + lastname}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  style={{
                    fontWeight: "400",
                    fontSize: "0.8em",
                    color: "white",
                  }}
                >
                  {job}
                </Typography>
              </Grid>
            </Grid>
            {isPhone ? (
              <Grid container item xs={5} style={{ justifyContent: "center" }}>
                {" "}
                <Avatar
                  alt="avatar"
                  className={classes.large}
                  src={
                    props.profile.photoUrl === undefined
                      ? Male
                      : props.profile.photoUrl
                  }
                ></Avatar>
                <Grid
                  item
                  xs={12}
                  container
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px 0px",
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: "400",
                      fontSize: "0.7em",
                      color: "white",
                    }}
                  >
                    Status:{" "}
                    {disabled === "true" ? (
                      <Chip
                        style={{
                          backgroundColor: "rgb(178, 4, 83)",
                          color: "white",
                        }}
                        label="Disabled"
                        size="small"
                      />
                    ) : (
                      <Chip
                        style={{ backgroundColor: "#69C21A", color: "white" }}
                        label="Active"
                        size="small"
                      />
                    )}
                  </Typography>
                </Grid>
              </Grid>
            ) : null}
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "0.6em",
                color: "rgb(173, 176, 187)",
              }}
            >
              {"Joined on" +
                " " +
                moment(props.profile.usercreation_timeStamp).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              marginBottom: "10px",
            }}
          >
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "0.6em",
                color: "rgb(173, 176, 187)",
              }}
            >
              Created By: {creatorData.fullname}
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Grid item container xs={8} style={{ display: "block" }}>
              <Grid item xs={12} style={{ margin: "10px 0px" }}>
                <Typography className={classes.description}>
                  Email: {email}
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0px" }}>
                <Typography className={classes.description}>
                  Phone: {phone}
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0px" }}>
                <Typography className={classes.description}>
                  Country: {country}
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0px" }}>
                <Typography className={classes.description}>
                  Company: {company}
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ margin: "10px 0px" }}>
                <Typography className={classes.description}>
                  Department: {department}
                </Typography>
              </Grid>{" "}
            </Grid>
            <Grid
              item
              container
              xs={4}
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
            >
              {company !== "" ? (
                <Avatar
                  alt="avatar"
                  className={classes.complogo}
                  src={
                    company === "Soletanche Bachy"
                      ? SBC
                      : company === "Freyssinet"
                      ? FREY
                      : company === "Tierra Armada"
                      ? TA
                      : null
                  }
                />
              ) : null}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Summary;
