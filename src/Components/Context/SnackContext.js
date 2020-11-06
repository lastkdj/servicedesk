import { findByTestId } from "@testing-library/react";
import React, { useContext, useMemo, createContext, useReducer } from "react";

const SnackContext = createContext();

function submitReducer(state, action) {
  switch (action.type) {
    case "snack": {
      return {
        ...state,
        snack: !action.value,
      };
    }
  }
}

const initialState = {
  snack: false,
};

export function SnackProvider(props) {
  const [state, dispatch] = useReducer(submitReducer, initialState);

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <SnackContext.Provider value={value} {...props} />;
}

export function useSnack() {
  const context = useContext(SnackContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
