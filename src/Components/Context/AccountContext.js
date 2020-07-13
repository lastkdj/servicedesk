import React, { useContext, useMemo, createContext, useReducer } from "react";

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
      };
    }
    case "error": {
      return {
        ...state,
        error: true,
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
    case "pic": {
      return {
        ...state,
        picture: action.value,
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
  picture: {},
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
