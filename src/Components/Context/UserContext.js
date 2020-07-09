import React, { useState, useContext, useMemo, createContext } from "react";

const UsuarioContext = createContext();

export function UserProvider(props) {
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const value = useMemo(() => {
    return {
      error,
      setError,
      open,
      setOpen,
    };
  }, [error, open]);

  return <UsuarioContext.Provider value={value} {...props} />;
}

export function useUsuario() {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error("No esta dentro del Proveedor");
  }
  return context;
}
