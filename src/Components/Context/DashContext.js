import React, { useState, useContext, useMemo, createContext } from "react";

const DashContext = createContext();

export function DashProvider(props) {
  const [open, setOpen] = useState(false);

  const value = useMemo(() => {
    return {
      open,
      setOpen,
    };
  }, [open]);

  return <DashContext.Provider value={value} {...props} />;
}

export function useDash() {
  const context = useContext(DashContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
