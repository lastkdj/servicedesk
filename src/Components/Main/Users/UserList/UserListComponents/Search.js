import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const newest = "Newest Users";
const oldest = "Oldest Users";

const useStyles = makeStyles((theme) => ({
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
}));

const Search = (props) => {
  const classes = useStyles();
  const [sort, setSort] = useState("");
  const [opensort, setOpenSort] = useState(false);

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  return (
    <Grid container item xs={12} style={{ justifyContent: "space-between" }}>
      <Grid item xs={4} style={{ padding: "20px" }}>
        <TextField
          value={props.search}
          type="text"
          label="Search"
          variant="outlined"
          className={classes.root}
          onChange={props.handleChange}
          labelwidth={70}
          placeholder="Search Employee"
          InputLabelProps={{
            classes: {
              root: classes.label,
            },
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment disablePointerEvents={true} position="start">
                <IconButton style={{ padding: "0px", color: "#adb0bb" }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={2} style={{ padding: "20px" }}>
        <FormControl variant="outlined" className={classes.rootcompany}>
          <InputLabel
            id="demo-simple-select-outlined-label"
            style={{ color: "white" }}
          >
            Sort By
          </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-outlined-label"
            id="company"
            open={opensort}
            value={sort}
            onClose={() => {
              setOpenSort(false);
            }}
            onOpen={() => {
              setOpenSort(true);
            }}
            onChange={handleSort}
            label="Company"
            classes={{ icon: classes.popupcompany }}
            MenuProps={{
              PopoverClasses: { paper: classes.backcompany },
            }}
          >
            <MenuItem value={newest}>Newest Users</MenuItem>
            <MenuItem value={oldest}>Older Users</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Search;
