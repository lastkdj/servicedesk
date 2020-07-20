import React, { useState, useContext, useMemo, createContext } from "react";

const DashContext = createContext();

export function DashProvider(props) {
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);

  const value = useMemo(() => {
    return {
      openRight,
      openLeft,
      setOpenRight,
      setOpenLeft,
    };
  }, [openRight, openLeft]);

  return <DashContext.Provider value={value} {...props} />;
}

export function useDash() {
  const context = useContext(DashContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
