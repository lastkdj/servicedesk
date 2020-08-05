import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useAccount } from "../../../../../Context/AccountContext";
import { useMediaQuery } from "react-responsive";

const Summary = () => {
  const isPhone = useMediaQuery({ query: "(max-device-width: 375px)" });
  const { state } = useAccount();
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
      lg={6}
      xl={6}
      spacing={2}
      style={{ justifyContent: "center", marginLeft: isPhone ? null : "10px" }}
    >
      <Grid
        item
        xs={12}
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
            textAlign: "center",
            height: "36px",
          }}
        >
          {name.charAt(0).toUpperCase() +
            name.slice(1) +
            " " +
            lastname.charAt(0).toUpperCase() +
            lastname.slice(1)}
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
          Job Position: <span style={{ color: "#adb0bb" }}>{job}</span>
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
      </Grid>
    </Grid>
  );
};

export default Summary;
