import React, { useEffect } from "react";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import { makeStyles } from "@material-ui/core/styles";
import { useAccount } from "../../../../Context/AccountContext";
import { AuthContext } from "../../../../Context/AuthContext";

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
  const { data } = React.useContext(AuthContext);
  const classes = useStyles();

  const {
    error,
    checked,
    name,
    lastname,
    phone,
    country,
    company,
    department,
    job,
    snack,
    update,
    loading,
  } = state;

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "load" });
    if (company === "" || department === "") {
      dispatch({ type: "error", value: error });
    } else {
      FirebaseApp.firestore()
        .collection("users")
        .doc(FirebaseApp.auth().currentUser.uid)
        .update({
          firstName: name,
          lastName: lastname,
          phonenumber: phone,
          country: country,
          company: company,
          department: department,
          job: job,
          publicinfo: checked,
        })
        .then(() => {
          dispatch({ type: "snack", value: snack });
          dispatch({ type: "patch", value: update });
        });
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

  const handleError = () => {
    dispatch({ type: "error", value: error });
  };

  useEffect(() => {
    dispatch({ type: "switch", value: !data.publicinfo });
  }, []);

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
            disabled={loading}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Grid>
        <Snackbar open={snack} autoHideDuration={4000} onClose={handleClose}>
          <Alert severity="success">
            You have successfully updated your info!
          </Alert>
        </Snackbar>
        <Snackbar open={error} autoHideDuration={4000} onClose={handleError}>
          <Alert severity="error">Select Company / Department </Alert>
        </Snackbar>
      </Grid>
    </React.Fragment>
  );
};

export default SubmitForm;
