import React, { useState, useRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import countries from "../../../Account/AccountComponents/Countries";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { useAccount } from "../../../../Context/AccountContext";
import FirebaseApp from "../../../../../FireBase/FireBaseConfig";
import moment from "moment";
import ProgressBar from "../../../../Login/ProgressBar";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import AddUserLoad from "./AddUserLoad";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(40, 44, 52)",
    color: "white",
    display: "flex",
    padding: "20px 0px",
    maxWidth: "1000px",
    justifyContent: "center",
    flexDirection: "row",
  },

  button: {
    backgroundColor: "#8A85FF",
    color: "white",
    marginBottom: "10px",

    "&:hover": {
      backgroundColor: "#5A55DA",
    },
  },

  userdetails: {
    color: "#e6e5e8",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "550",
    fontSize: "16px",
    lineHeight: "1.334",
  },

  textfieldroot: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
      },

      "&.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
        color: "white",
      },

      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },

      "&.MuiSelect-icon": {
        color: "white",
      },
    },
  },

  label: {
    color: "#e6e5e8",

    "&.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#e6e5e8",
    },
  },

  rootcountry: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
      },

      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },

      "&.MuiSelect-icon": {
        color: "white",
      },
    },
  },

  labelcountry: {
    color: "white",
  },

  backcountry: {
    backgroundColor: "#282C34",
    color: "white",
  },

  popupcountry: {
    color: "white",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  rootcompany: {
    width: "100%",
    "& label.Mui-focused": {
      color: "#B6B3FF",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.23)",
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: "#B6B3FF",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8A85FF",
      },
    },

    "&.MuiSelect-icon": {
      color: "white",
    },
    "&.MuiSelect-iconOutlined": {
      color: "white",
    },
  },

  backcompany: {
    backgroundColor: "#282C34",
    color: "white",
  },

  popupcompany: {
    color: "white",
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Zoom direction="up" ref={ref} {...props} />;
});

//Company
const sb = "Soletanche Bachy";
const frey = "Freyssinet";
const ta = "Tierra Armada";

//Department
const it = "IT Department";
const acc = "Accounting";
const st = "Study";
const grmd = "442 GRMD";
const hua = "450 Huatacondo";
const piq = "452 Pique Inco";
const cand = "453 Candelaria";

const AddUser = (props) => {
  const { state, dispatch } = useAccount();
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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [depa, setDepa] = useState("");
  const [opendepa, setOpenDepa] = useState(false);
  const [comp, setComp] = useState("");
  const [opencomp, setOpenComp] = useState(false);
  const [password, setPassword] = useState("");
  const [count, setCount] = useState("");
  const nameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const jobRef = useRef();
  const passwordRef = useRef();

  const classes = useStyles();

  const handleClose = () => {
    props.setNewUser(false);
  };

  const handleCompany = (event) => {
    dispatch({ type: "field", field: "company", value: event.target.value });
    setComp(event.target.value);
  };

  const handledepartment = (event) => {
    dispatch({ type: "field", field: "department", value: event.target.value });
    setDepa(event.target.value);
  };

  const onSubmit = () => {
    setLoading(true);
    const utcDate = Date.now();
    const newDate = moment(utcDate).format("dddd Do MMMM YYYY, h:mm:ss a");
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const addUser = FirebaseApp.functions().httpsCallable("addUser");
    addUser({
      firstName: name.charAt(0).toUpperCase() + name.slice(1),
      lastname: lastname.charAt(0).toUpperCase() + lastname.slice(1),
      fullname: name + " " + lastname,
      email: email,
      password: password,
      phonenumber: phone,
      country: country,
      company: company,
      department: department,
      job: job,
      publicinfo: true,
      joinDate: newDate,
      usercreation_timeStamp: utcDate,
      defaultAvatar: randomColor,
    }).then((result) => {
      if (result.data === null) {
        setError("auth/successfully-created");
        setLoading(false);
      } else {
        setLoading(false);
        setError(result.data);
      }

      console.log("Contrasenia papi ", result.data);
    });
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleError = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setError("");
  };

  useEffect(() => {
    if (error === "auth/successfully-created") {
      dispatch({
        type: "field",
        field: "name",
        value: "",
      });
      nameRef.current.value = "";
      dispatch({
        type: "field",
        field: "lastname",
        value: "",
      });
      lastnameRef.current.value = "";
      dispatch({
        type: "field",
        field: "phone",
        value: "",
      });
      phoneRef.current.value = "";
      dispatch({
        type: "field",
        field: "email",
        value: "",
      });
      emailRef.current.value = "";
      passwordRef.current.value = "";
      setPassword("");
      dispatch({
        type: "field",
        field: "job",
        value: "",
      });
      jobRef.current.value = "";
      dispatch({
        type: "field",
        field: "country",
        value: "",
      });
      setCount("");
      setComp("");
      setDepa("");
    }
  }, [error]);

  return (
    <Dialog
      open={props.newUser}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      PaperProps={{
        classes: { root: classes.root },
      }}
    >
      <AddUserLoad loading={loading} />
      <Grid container xs={12} spacing={2} style={{ justifyContent: "center" }}>
        <Grid
          item
          xs={12}
          style={{
            padding: "13px",
            backgroundColor: "#8a85ff",
            borderRadius: "5px",
            margin: "0px 20px",
            marginBottom: "20px",
          }}
        >
          <Typography className={classes.userdetails}>Profile</Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          spacing={2}
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            justifyContent: "center",
            borderRadius: "5px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Grid container item xs={6} spacing={2}>
            <Grid item xs={6}>
              <TextField
                inputRef={nameRef}
                label="First Name"
                variant="outlined"
                required
                className={classes.textfieldroot}
                onChange={(ev) =>
                  dispatch({
                    type: "field",
                    field: "name",
                    value: ev.target.value,
                  })
                }
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                inputRef={lastnameRef}
                label="Last Name"
                variant="outlined"
                required
                className={classes.textfieldroot}
                onChange={(ev) =>
                  dispatch({
                    type: "field",
                    field: "lastname",
                    value: ev.target.value,
                  })
                }
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={emailRef}
                label="Email Address"
                variant="outlined"
                required
                placeholder="Ex sendhelp@nvm.com"
                className={classes.textfieldroot}
                onChange={(ev) =>
                  dispatch({
                    type: "field",
                    field: "email",
                    value: ev.target.value,
                  })
                }
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={passwordRef}
                variant="outlined"
                required
                label="Password"
                type="password"
                className={classes.textfieldroot}
                placeholder="Password"
                onChange={(ev) => {
                  setPassword(ev.target.value);
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                  shrink: true,
                }}
              />
            </Grid>
            <ProgressBar password={password} />
          </Grid>
          <Grid
            container
            item
            xs={6}
            spacing={2}
            style={{ justifyContent: "center", marginLeft: "10px" }}
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
                Company: <span style={{ color: "#adb0bb" }}>{comp}</span>
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
                Department: <span style={{ color: "#adb0bb" }}>{depa}</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            padding: "13px",

            backgroundColor: "#8a85ff",
            borderRadius: "5px",
            margin: "20px 20px",
          }}
        >
          <Typography className={classes.userdetails}>Organization</Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          spacing={2}
          style={{
            justifyContent: "center",

            borderRadius: "5px",
          }}
        >
          <Grid
            container
            item
            xs={12}
            spacing={2}
            style={{ justifyContent: "center" }}
          >
            <Grid item xs={4}>
              <TextField
                inputRef={phoneRef}
                label="Phone Number"
                variant="outlined"
                placeholder="Ex +56949651721"
                className={classes.textfieldroot}
                onChange={(ev) =>
                  dispatch({
                    type: "field",
                    field: "phone",
                    value: ev.target.value,
                  })
                }
                inputProps={{
                  maxLength: 15,
                }}
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="outlined" className={classes.rootcompany}>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  style={{ color: "white" }}
                >
                  Company
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-outlined-label"
                  id="company"
                  value={comp}
                  open={opencomp}
                  onChange={handleCompany}
                  onClose={() => {
                    setOpenComp(false);
                  }}
                  onOpen={() => {
                    setOpenComp(true);
                  }}
                  label="Company"
                  classes={{ icon: classes.popupcompany }}
                  MenuProps={{
                    PopoverClasses: { paper: classes.backcompany },
                  }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={sb}>Soletanche Bachy</MenuItem>
                  <MenuItem value={frey}>Freyssinet</MenuItem>
                  <MenuItem value={ta}>Tierra Armada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                inputRef={jobRef}
                label="Job Position"
                variant="outlined"
                placeholder="Analyst"
                inputProps={{
                  maxLength: 15,
                }}
                className={classes.textfieldroot}
                onChange={(ev) =>
                  dispatch({
                    type: "field",
                    field: "job",
                    value: ev.target.value,
                  })
                }
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                  },
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={2}
            style={{ justifyContent: "center" }}
          >
            <Grid item xs={4}>
              <Autocomplete
                id="country"
                options={countries}
                classes={{
                  option: classes.option,
                  paper: classes.backcountry,
                  popupIndicator: classes.popupcountry,
                }}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                  <React.Fragment>{option.label}</React.Fragment>
                )}
                value={count}
                onChange={(event, value) =>
                  dispatch({
                    type: "field",
                    field: "country",
                    value: value.label,
                  })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    className={classes.rootcountry}
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                      shrink: "true",
                    }}
                    InputLabelProps={{
                      classes: {
                        root: classes.labelcountry,
                      },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl variant="outlined" className={classes.rootcompany}>
                <InputLabel
                  id="demo-simple-select-outlined-label"
                  style={{ color: "white" }}
                >
                  Department
                </InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-outlined-label"
                  id="department"
                  value={depa}
                  open={opendepa}
                  onChange={handledepartment}
                  onClose={() => {
                    setOpenDepa(false);
                  }}
                  onOpen={() => {
                    setOpenDepa(true);
                  }}
                  label="Department"
                  classes={{ icon: classes.popupcompany }}
                  MenuProps={{
                    PopoverClasses: { paper: classes.backcompany },
                  }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={it}>IT Department</MenuItem>
                  <MenuItem value={acc}>Accounting</MenuItem>
                  <MenuItem value={st}>Study</MenuItem>
                  <MenuItem value={grmd}>442 GRMD</MenuItem>
                  <MenuItem value={hua}>450 Huatacondo</MenuItem>
                  <MenuItem value={piq}>452 Pique Inco</MenuItem>
                  <MenuItem value={cand}>453 Candelaria</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Button
                disabled={loading}
                fullWidth
                variant="contained"
                type="submit"
                color="primary"
                className="submit"
                style={{ marginBottom: "0px", height: "56px" }}
                onClick={onSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {error === "auth/email-already-exists" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleError}>
          <Alert severity="error">Email already in Use</Alert>
        </Snackbar>
      ) : error === "auth/invalid-email" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleError}>
          <Alert severity="error">Invalid email format</Alert>
        </Snackbar>
      ) : error === "auth/invalid-password" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleError}>
          <Alert severity="error">
            The password must contain at least 6 characters
          </Alert>
        </Snackbar>
      ) : error === "auth/successfully-created" ? (
        <Snackbar open={true} autoHideDuration={3000} onClose={handleError}>
          <Alert severity="success">The user been created</Alert>
        </Snackbar>
      ) : null}
    </Dialog>
  );
};

export default AddUser;
