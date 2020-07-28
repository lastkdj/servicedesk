import React from "react";
import { DashProvider } from "./DashContext";
import { StylesProvider } from "@material-ui/core/styles";
import { UserProvider } from "./UserContext";
import { AuthProvider } from "./AuthContext";
import { AccountProvider } from "./AccountContext";
import { UserListProvider } from "./UserListContext";

const MaxProvider = (props) => {
  return (
    <UserListProvider>
      <AuthProvider>
        <DashProvider>
          <UserProvider>
            <StylesProvider injectFirst>
              <AccountProvider>{props.children}</AccountProvider>
            </StylesProvider>
          </UserProvider>
        </DashProvider>
      </AuthProvider>
    </UserListProvider>
  );
};

export default MaxProvider;
