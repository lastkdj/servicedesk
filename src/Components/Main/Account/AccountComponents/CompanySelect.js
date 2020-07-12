import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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

  back: {
    backgroundColor: "#282C34",
    color: "white",
  },
}));

export default function CompanySelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.root}>
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
        value={age}
        onChange={handleChange}
        label="Company"
        MenuProps={{
          PopoverClasses: { paper: classes.back },
        }}
      >
        <MenuItem value={10}>Soletanche Bachy</MenuItem>
        <MenuItem value={20}>Freyssinet</MenuItem>
        <MenuItem value={30}>Tierra Armada</MenuItem>
      </Select>
    </FormControl>
  );
}
