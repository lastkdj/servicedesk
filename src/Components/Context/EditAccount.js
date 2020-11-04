import { findByTestId } from "@testing-library/react";
import React, { useContext, useMemo, createContext, useReducer } from "react";

const EditAccountContext = createContext();

function submitReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "snack": {
      return {
        ...state,
        snack: !action.value,
        error: false,
        loading: false,
      };
    }
    case "error": {
      return {
        ...state,
        error: !action.value,
        loading: false,
      };
    }
    case "switch": {
      return {
        ...state,
        checked: !action.value,
        disabled: action.value,
      };
    }
    case "patch": {
      return {
        ...state,
        update: !action.value,
      };
    }
    case "load": {
      return {
        ...state,
        loading: true,
      };
    }

    default:
      break;
  }

  return state;
}

const initialState = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  phone: "",
  country: "",
  company: "",
  department: "",
  job: "",
  createdby: "",
  disabled: "false",
  snack: false,
  error: false,
  checked: false,
  update: false,
  loading: false,
};

export function EditAccountProvider(props) {
  const [state, dispatch] = useReducer(submitReducer, initialState);

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <EditAccountContext.Provider value={value} {...props} />;
}

export function useEditAccount() {
  const context = useContext(EditAccountContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
