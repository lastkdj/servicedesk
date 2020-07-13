import React from "react";
import { DashProvider } from "./DashContext";
import { StylesProvider } from "@material-ui/core/styles";
import { UserProvider } from "./UserContext";
import { AuthProvider } from "./AuthContext";
import { AccountProvider } from "./AccountContext";

const MaxProvider = (props) => {
  return (
    <AuthProvider>
      <DashProvider>
        <UserProvider>
          <StylesProvider injectFirst>
            <AccountProvider>{props.children}</AccountProvider>
          </StylesProvider>
        </UserProvider>
      </DashProvider>
    </AuthProvider>
  );
};

export default MaxProvider;
