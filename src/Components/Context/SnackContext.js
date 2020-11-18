import React, { useContext, useMemo, createContext, useReducer } from "react";

const SnackContext = createContext();

function submitReducer(state, action) {
  switch (action.type) {
    case "edit": {
      return {
        ...state,
        snackEdit: !action.value,
      };
    }
    case "add": {
      return {
        ...state,
        snackAdd: !action.value,
      };
    }
  }
}

const initialState = {
  snackEdit: false,
  snackAdd: false,
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
