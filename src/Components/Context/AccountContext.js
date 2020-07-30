import React, {
  useContext,
  useMemo,
  createContext,
  useReducer,
  useState,
} from "react";
import { useEffect } from "react";

const AccountContext = createContext();

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
  phone: "",
  country: "",
  company: "",
  department: "",
  job: "",
  snack: false,
  error: false,
  checked: false,
  update: false,
  loading: false,
};

export function AccountProvider(props) {
  const [state, dispatch] = useReducer(submitReducer, initialState);

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <AccountContext.Provider value={value} {...props} />;
}

export function useAccount() {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
