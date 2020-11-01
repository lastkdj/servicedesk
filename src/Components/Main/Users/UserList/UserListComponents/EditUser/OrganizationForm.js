import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import countries from "../../../../Account/AccountComponents/Countries";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import FirebaseApp from "../../../../../../FireBase/FireBaseConfig";
import { useEditAccount } from "../../../../../Context/EditAccount";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

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

const useStyles = makeStyles((theme) => ({
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

  backcompany: {
    backgroundColor: "#282C34",
    color: "white",
  },

  popupcompany: {
    color: "white",
  },

  button: {
    backgroundColor: "#A735FF",
    color: "white",

    "&:hover": {
      backgroundColor: "#791AC2",
    },
  },
}));

const OrganizationForm = (props) => {
  const { dispatch, state } = useEditAccount();

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

  const [opendepa, setOpenDepa] = useState(false);
  const [opencomp, setOpenComp] = useState(false);
  const [count, setCount] = useState("");
  const [depa, setDepa] = useState("");
  const [comp, setComp] = useState("");
  const [snack, setSnack] = useState(false);

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = () => {
    setSnack(!snack);
  };

  const handleCompany = (event) => {
    dispatch({ type: "field", field: "company", value: event.target.value });
    setComp(event.target.value);
  };

  const handledepartment = (event) => {
    dispatch({ type: "field", field: "department", value: event.target.value });
    setDepa(event.target.value);
  };

  useEffect(() => {
    if (
      props.error === "auth/successfully-created" ||
      props.error === "firstload"
    ) {
      dispatch({
        type: "field",
        field: "phone",
        value: "",
      });

      dispatch({
        type: "field",
        field: "job",
        value: "",
      });

      dispatch({
        type: "field",
        field: "company",
        value: "",
      });
      setComp("");
      dispatch({
        type: "field",
        field: "department",
        value: "",
      });
      setDepa("");
      dispatch({
        type: "field",
        field: "country",
        value: "",
      });
      setCount("");
    }
  }, [props.error]);

  const onSubmit = () => {
    if (job === "") {
      props.setError("Missing Fields");
    } else if (company === "") {
      props.setError("Missing Fields");
    } else if (department === "") {
      props.setError("Missing Fields");
    } else if (country === "") {
      props.setError("Missing Fields");
    } else {
      props.setLoading(true);
      FirebaseApp.firestore()
        .collection("users")
        .doc(FirebaseApp.auth().currentUser.uid)
        .update({
          firstName: name.charAt(0).toUpperCase() + name.slice(1),
          lastname: lastname.charAt(0).toUpperCase() + lastname.slice(1),
          fullname: name + " " + lastname,
          email: email,
          phonenumber: phone,
          country: country,
          company: company,
          department: department,
          job: job,
        })
        .then(() => {
          setSnack(true);
          props.setLoading(false);
        });
    }
  };

  const onCancel = () => {
    props.setEditUser(false);
  };

  const classes = useStyles();
  return (
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
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <TextField
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
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
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
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <TextField
            // inputRef={job}
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
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
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
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
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
        <Grid
          item
          container
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{ justifyContent: "space-between" }}
        >
          <Grid item container xs={5} style={{ marginRight: "10px" }}>
            <Button
              disabled={props.loading}
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}
              style={{
                marginBottom: "0px",
                height: "56px",
                backgroundColor: "#B20453",
              }}
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>

          <Grid item container xs={6}>
            <Button
              disabled={props.loading}
              fullWidth
              variant="contained"
              type="submit"
              color="primary"
              className={classes.button}
              onClick={onSubmit}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Snackbar open={snack} autoHideDuration={4000} onClose={handleClose}>
        <Alert severity="success">User info Updated</Alert>
      </Snackbar>
    </Grid>
  );
};

export default OrganizationForm;
