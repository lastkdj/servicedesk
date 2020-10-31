import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "react-responsive";
import { useEditAccount } from "../../../../../Context/EditAccount";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Male from "../../../../../../Imagenes/male.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(18),
    height: theme.spacing(18),
  },
}));

const Summary = (props) => {
  const classes = useStyles();
  const isPhone = useMediaQuery({ query: "(max-device-width: 375px)" });
  const { state, dispatch } = useEditAccount();

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
        xs={5}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <Avatar
          alt="avatar"
          className={classes.large}
          src={
            props.profile.photoUrl === undefined ? Male : props.profile.photoUrl
          }
        ></Avatar>
      </Grid>
      <Grid
        item
        xs={7}
        style={{
          justifyContent: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        {" "}
        <Typography
          style={{
            fontWeight: "500",
            fontSize: "1.5em",
            height: "36px",
          }}
        >
          {" "}
          {name + " " + lastname}
        </Typography>
        <Grid
          item
          xs={12}
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            marginBottom: "20px",
          }}
        >
          <Typography
            style={{
              fontWeight: "400",
              fontSize: "0.8em",
              color: "rgb(173, 176, 187)",
              marginBottom: "20px",
            }}
          >
            "CEO Manager Cet"
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontWeight: "400",
              fontSize: "0.8em",
              color: "#e6e5e8",
            }}
          >
            Email Address: <span style={{ color: "#adb0bb" }}>{email}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontWeight: "400",
              fontSize: "0.8em",
              color: "#e6e5e8",
            }}
          >
            Phone Number: <span style={{ color: "#adb0bb" }}>{phone}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontWeight: "400",
              fontSize: "0.8em",
              color: "#e6e5e8",
            }}
          >
            Country: <span style={{ color: "#adb0bb" }}>{country}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontWeight: "400",
              fontSize: "0.8em",
              color: "#e6e5e8",
            }}
          >
            Company: <span style={{ color: "#adb0bb" }}>{company}</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{
              fontWeight: "400",
              fontSize: "0.8em",
              color: "#e6e5e8",
            }}
          >
            Department: <span style={{ color: "#adb0bb" }}>{department}</span>
          </Typography>
        </Grid>{" "}
      </Grid>
    </Grid>
  );
};

export default Summary;
