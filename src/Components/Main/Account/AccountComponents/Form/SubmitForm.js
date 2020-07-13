import React from "react";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import { useAccount } from "../../../../Context/AccountContext";

const useStyles = makeStyles((theme) => ({
  secondary: {
    "&.MuiSwitch-colorSecondary.Mui-checked": {
      color: "#8A85FF",
    },

    "&.MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#8A85FF",
    },
  },
}));

const SubmitForm = () => {
  const { state, dispatch } = useAccount();
  const classes = useStyles();

  const {
    checked,
    name,
    lastname,
    email,
    phone,
    country,
    company,
    department,
    job,
    snack,
    update,
  } = state;

  const onSubmit = (e) => {
    if (
      name !== "" &&
      lastname !== "" &&
      email !== "" &&
      phone !== "" &&
      department !== "" &&
      job !== ""
    ) {
      e.preventDefault();
      FirebaseApp.firestore()
        .collection("users")
        .doc(FirebaseApp.auth().currentUser.uid)
        .set(
          {
            firstName: name,
            lastName: lastname,
            email: email,
            phonenumber: phone,
            country: country,
            company: company,
            department: department,
            job: job,
          },
          { merge: true }
        )
        .then(() => {
          dispatch({ type: "snack", value: snack });
          dispatch({ type: "patch", value: update });
        });
    } else {
      console.log("FALTAN CAMPOS POR ESCRIBIR");
      dispatch({ type: "error" });
    }
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleChange = (event) => {
    dispatch({ type: "switch", value: checked });
  };

  const handleClose = () => {
    dispatch({ type: "snack", value: snack });
  };

  return (
    <React.Fragment>
      <Grid
        container
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        style={{ padding: "16px" }}
      >
        <Grid item xs={12} style={{ color: "#e6e5e8" }}>
          <Typography style={{ fontWeight: "500" }}>
            Make Contact Info Public
          </Typography>
        </Grid>
        <Grid item xs={12} style={{ color: "#adb0bb" }}>
          <Typography style={{ fontWeight: "400", fontSize: "14px" }}>
            Means that anyone viewing your profile will be able to see your
            contacts details
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Switch
            checked={checked}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
            classes={{
              colorSecondary: classes.secondary,
              checked: classes.secondary,
            }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        md={6}
        lg={6}
        style={{
          padding: "16px",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        {" "}
        <Grid item xs={5}>
          <Button
            fullWidth
            variant="contained"
            type="submit"
            color="primary"
            className="submit"
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Snackbar open={snack} autoHideDuration={4000} onClose={handleClose}>
          <Alert severity="success">Updated! </Alert>
        </Snackbar>
      </Grid>
    </React.Fragment>
  );
};

export default SubmitForm;
