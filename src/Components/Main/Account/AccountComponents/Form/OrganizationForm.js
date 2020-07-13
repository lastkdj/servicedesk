import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import countries from "../Countries";
import TextField from "@material-ui/core/TextField";
import { useAccount } from "../../../../Context/AccountContext";

const useStyles = makeStyles((theme) => ({
  userdetails: {
    color: "#e6e5e8",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    textTransform: "none",
    fontWeight: "550",
    fontSize: "16px",
    lineHeight: "1.334",
  },

  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },

  root: {
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

  label: {
    color: "#e6e5e8",
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

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const sb = "Soletanche Bachy";
const frey = "Freyssinet";
const ta = "Tierra Armada";

const OrganizationForm = () => {
  const { state, dispatch } = useAccount();
  const { company } = state;
  const classes = useStyles();

  const handleCompany = (event) => {
    dispatch({ type: "field", field: "company", value: event.target.value });
  };

  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        style={{
          padding: "13px",
        }}
      >
        <Typography className={classes.userdetails}>Organization</Typography>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: "16px" }}>
          <Autocomplete
            id="country-select-demo"
            options={countries}
            classes={{
              option: classes.option,
              paper: classes.backcountry,
              popupIndicator: classes.popupcountry,
            }}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
              <React.Fragment>
                <span>{countryToFlag(option.code)}</span>
                {option.label} ({option.code}) +{option.phone}
              </React.Fragment>
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
                value={params.label}
                label="Choose a country"
                variant="outlined"
                className={classes.rootcountry}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                  shrink: "true",

                  // disable autocomplete and autofill
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
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: "16px" }}>
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
              id="demo-simple-select-outlined"
              value={company}
              onChange={handleCompany}
              label="Company"
              classes={{ icon: classes.popupcompany }}
              MenuProps={{
                PopoverClasses: { paper: classes.backcompany },
              }}
            >
              <MenuItem value={sb}>Soletanche Bachy</MenuItem>
              <MenuItem value={frey}>Freyssinet</MenuItem>
              <MenuItem value={ta}>Tierra Armada</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: "16px" }}>
          <TextField
            id="outlined-basic"
            label="Department"
            variant="outlined"
            placeholder="Choose a Department"
            className={classes.root}
            onChange={(ev) =>
              dispatch({
                type: "field",
                field: "department",
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
        <Grid item xs={12} sm={6} md={6} lg={6} style={{ padding: "16px" }}>
          <TextField
            id="outlined-basic"
            label="Job Position"
            variant="outlined"
            placeholder="Analyst"
            className={classes.root}
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
    </React.Fragment>
  );
};

export default OrganizationForm;
