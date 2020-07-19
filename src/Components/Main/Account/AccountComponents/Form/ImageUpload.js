import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import "../../Account.css";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import SBC from "../../../../../Imagenes/sbc.jpg";
import FREY from "../../../../../Imagenes/freyLogo.jpg";
import TA from "../../../../../Imagenes/TALogo.jpg";
import { AuthContext } from "../../../../Context/AuthContext";

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

  companysbc: {
    backgroundImage: `url(${SBC})`,
    height: "150px",
    justifyContent: "center",
    flexDirection: "column",
    padding: "50px 40px 40px 107px",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.up("sm")]: {
      backgroundPosition: "center",
      paddingLeft: "150px",
    },

    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${SBC})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 50px 90px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${SBC})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 50px 90px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundImage: `url(${SBC})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 40px 113px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
    },
  },

  companyfrey: {
    backgroundImage: `url(${FREY})`,
    height: "150px",
    justifyContent: "center",
    flexDirection: "column",
    padding: "50px 40px 40px 107px",
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.up("sm")]: {
      backgroundPosition: "center",
      paddingLeft: "150px",
    },

    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${FREY})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 50px 90px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${FREY})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 50px 90px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundImage: `url(${FREY})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 40px 107px",
      backgroundRepeat: "no-repeat",
    },
  },

  companyta: {
    backgroundImage: `url(${TA})`,
    backgroundRepeat: "no-repeat",
    height: "150px",
    justifyContent: "center",
    flexDirection: "column",
    padding: "50px 40px 40px 107px",

    [theme.breakpoints.up("sm")]: {
      backgroundPosition: "center",
      paddingLeft: "150px",
    },

    [theme.breakpoints.up("md")]: {
      backgroundImage: `url(${TA})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 50px 90px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${TA})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 50px 90px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    },
    [theme.breakpoints.up("xl")]: {
      backgroundImage: `url(${TA})`,
      height: "150px",
      justifyContent: "center",
      flexDirection: "column",
      padding: "50px 40px 40px 107px",
      backgroundRepeat: "no-repeat",
    },
  },

  companytext: {
    color: "#adb0bb",
    textAlign: "left",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "1.334",
  },
}));

const ImageUpload = () => {
  const { data } = useContext(AuthContext);
  const classes = useStyles();

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = FirebaseApp.storage().ref();
    let fileext = file.type.split("/");
    if (
      fileext[1] === "jpg" ||
      fileext[1] === "jpeg" ||
      fileext[1] === "png" ||
      fileext[1] === "gif"
    ) {
      const fileRef = storageRef.child(
        "userPic/" +
          FirebaseApp.auth().currentUser.uid +
          "/" +
          FirebaseApp.auth().currentUser.uid +
          "." +
          fileext[1]
      );
      await fileRef.put(file).then(() => {});
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
        .then(() => {});
    } else {
      console.log("No es un formato valido");
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.avatargrid}>
        <Avatar alt="avatar" src={data.photoUrl} className={classes.small} />
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.usertext}>
          {data.firstName === undefined || data.lastName === undefined
            ? " "
            : data.firstName + " " + data.lastName}
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "10px" }}>
        <Typography className={classes.positiontext}> {data.job}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.locationtext}>
          {" "}
          {data.country}
        </Typography>
      </Grid>
      {data.publicinfo ? (
        <React.Fragment>
          <Grid item xs={12}>
            <Typography className={classes.locationtext}>
              {" "}
              {data.phonenumber === undefined ? "" : data.phonenumber}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.locationtext}>
              {" "}
              {data.email === undefined ? "" : data.email}
            </Typography>
          </Grid>
        </React.Fragment>
      ) : null}

      <Grid
        item
        container
        xs={12}
        className={
          data.company === "Soletanche Bachy"
            ? classes.companysbc
            : data.company === "Freyssinet"
            ? classes.companyfrey
            : data.company === "Tierra Armada"
            ? classes.companyta
            : null
        }
      >
        <Typography
          className={classes.companytext}
          style={{ marginTop: "15px" }}
        >
          {" "}
          {data.department}
        </Typography>
        <Typography className={classes.companytext}> {data.job}</Typography>
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
            Upload Picture
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};

export default ImageUpload;
