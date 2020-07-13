import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import "../../Account.css";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { useAccount } from "../../../../Context/AccountContext";

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

  phonetext: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "500",
    fontSize: "15px",
    lineHeight: "1.334",
  },
}));

const ImageUpload = () => {
  const classes = useStyles();
  const { state, dispatch } = useAccount();
  const { update, picture } = state;
  const [load, setLoad] = useState(false);
  const [pic, setPic] = React.useState({});
  const [username, setUserName] = useState("");

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = FirebaseApp.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const fileDown = await fileRef.getDownloadURL();
    FirebaseApp.firestore()
      .collection("users")
      .doc(FirebaseApp.auth().currentUser.uid)
      .set(
        {
          photoUrl: fileDown,
        },
        { merge: true }
      )
      .then(() => {
        setLoad(!load);
      });
  };

  const docRef = FirebaseApp.firestore()
    .collection("users")
    .doc(FirebaseApp.auth().currentUser.uid);

  useEffect(() => {
    const uploading = async () => {
      await docRef.onSnapshot(function (doc) {
        if (doc.exists) {
          dispatch({ type: "pic", value: doc.data() });
          // setPic(doc.data());
        } else {
          console.log("No hay nada papi");
        }
      });
    };
    uploading();
  }, [load, update]);

  useEffect(() => {
    setTimeout(() => {
      if (FirebaseApp.auth().currentUser) {
        setUserName(FirebaseApp.auth().currentUser.displayName);
      }
    }, 500);
  }, []);

  console.log("renderito");
  return (
    <Grid container>
      <Grid item xs={12} className={classes.avatargrid}>
        <Avatar alt="avatar" src={picture.photoUrl} className={classes.small} />
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.usertext}>{username}</Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "10px" }}>
        <Typography className={classes.positiontext}> {picture.job}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.locationtext}>
          {" "}
          {picture.country}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.locationtext}>
          {" "}
          {pic.phonenumber}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        style={{ padding: "10px", marginTop: "10px", color: "white" }}
      >
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleChange}
        />
        <label htmlFor="contained-button-file">
          <Button
            fullWidth
            type="submit"
            color="primary"
            variant="contained"
            className="submit"
            component="span"
          >
            <PhotoCamera style={{ marginRight: "20px" }} />
            Choose Picture
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};

export default ImageUpload;
