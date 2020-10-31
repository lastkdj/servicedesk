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
import BlockIcon from "@material-ui/icons/Block";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Edit from "../../../../../../Imagenes/Edit.jpg";
import Edit2 from "../../../../../../Imagenes/Edit2.jpg";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
    boxShadow: "0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)",
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
}));

const Summary = (props) => {
  const classes = useStyles();
  const isPhone = useMediaQuery({ query: "(max-device-width: 375px)" });
  const { state, dispatch } = useEditAccount();
  const [creatoruid, setCreatoruid] = useState("");
  const [creatorData, setCreatorData] = useState({});
  const {
    email,
    name,
    lastname,
    phone,
    country,
    company,
    department,
    job,
  } = state;

  useEffect(() => {
    console.log(creatoruid);
    if (creatoruid !== "" && creatoruid !== undefined) {
      var docRef = FirebaseApp.firestore().collection("users").doc(creatoruid);
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
  }, [creatoruid]);

  useEffect(() => {
    setCreatoruid(props.creator);
  }, [props.creator]);

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
      }}
    >
      <Grid
        item
        container
        xs={4}
        style={{ justifyContent: "center", alignItems: "space-between" }}
      >
        <Paper
          elevation={3}
          style={{
            backgroundColor: "#B086FF",
            width: "95%",
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
          <Grid item container style={{ justifyContent: "center" }} xs={12}>
            <Tooltip title="Search">
              <Grid item xs={8} className={classes.icon}>
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  classes={{ root: classes.root }}
                  // onClick={onClick}
                >
                  <CloudUploadIcon />
                </IconButton>
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  classes={{ root: classes.root }}
                  // onClick={onClick}
                >
                  <BlockIcon />
                </IconButton>
                <IconButton
                  aria-label="upload picture"
                  component="span"
                  classes={{ root: classes.root }}
                  // onClick={onClick}
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Tooltip>
          </Grid>{" "}
        </Paper>
      </Grid>

      <Grid
        item
        xs={8}
        container
        style={{
          justifyContent: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <Paper
          elevation={3}
          style={{
            backgroundColor: "white",
            padding: "15px",
            width: "100%",
            backgroundImage: `url(${Edit})`,
          }}
        >
          {" "}
          <Typography
            style={{
              fontWeight: "500",
              fontSize: "1.5em",
              height: "36px",
              color: "white",
            }}
          >
            {" "}
            {name + " " + lastname}
          </Typography>
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
          <Grid item xs={12} style={{ margin: "10px 0px" }}>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "0.8em",
                color: "#e6e5e8",
              }}
            >
              Email: {email}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ margin: "10px 0px" }}>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "0.8em",
                color: "#e6e5e8",
              }}
            >
              Phone: {phone}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ margin: "10px 0px" }}>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "0.8em",
                color: "#e6e5e8",
              }}
            >
              Country: {country}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ margin: "10px 0px" }}>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "0.8em",
                color: "#e6e5e8",
              }}
            >
              Company: {company}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ margin: "10px 0px" }}>
            <Typography
              style={{
                fontWeight: "400",
                fontSize: "0.8em",
                color: "#e6e5e8",
              }}
            >
              Department: {department}
            </Typography>
          </Grid>{" "}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Summary;
