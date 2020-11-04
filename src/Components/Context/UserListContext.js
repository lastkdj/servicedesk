import React, { useContext, useMemo, createContext, useReducer } from "react";

const UserListContext = createContext();

function submitReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }

    case "userFetch": {
      return {
        ...state,
        userFetch: action.value,
      };
    }

    case "fetch": {
      return {
        ...state,
        userData: action.value,
      };
    }

    case "copyfetch": {
      return {
        ...state,
        OriginuserData: action.value,
      };
    }

    case "moreData": {
      return {
        ...state,
        moreData: action.value + 10,
      };
    }

    case "toDelete": {
      return {
        ...state,
        toDelete: action.value,
      };
    }

    case "deleted": {
      return {
        ...state,
        deleted: action.value,
      };
    }

    case "selected": {
      return {
        ...state,
        selected: action.value,
      };
    }

    case "loading": {
      return {
        ...state,
        loading: action.value,
      };
    }

    case "success": {
      return {
        ...state,
        success: action.value,
      };
    }

    case "error": {
      return {
        ...state,
        error: action.value,
      };
    }

    case "refetch": {
      return {
        ...state,
        reFetch: action.value,
      };
    }

    case "edit": {
      return {
        ...state,
        editUser: !action.value,
      };
    }

    default:
      break;
  }
  return state;
}
const initialState = {
  comp: "All",
  depa: "All",
  moreData: 10,
  userData: [],
  OriginuserData: [],
  toDelete: [],
  userFetch: 0,
  deleted: false,
  loading: false,
  selected: "",
  error: false,
  success: false,
  reFetch: false,
  editUser: false,
};

export function UserListProvider(props) {
  const [state, dispatch] = useReducer(submitReducer, initialState);

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <UserListContext.Provider value={value} {...props} />;
}

export function useUserList() {
  const context = useContext(UserListContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
