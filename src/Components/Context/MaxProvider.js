import React from "react";
import { DashProvider } from "./DashContext";
import { StylesProvider } from "@material-ui/core/styles";
import { UserProvider } from "./UserContext";
import { AuthProvider } from "./AuthContext";
import { AccountProvider } from "./AccountContext";
import { UserListProvider } from "./UserListContext";
import { EditAccountProvider } from "./EditAccount";

const MaxProvider = (props) => {
  return (
    <UserListProvider>
      <AuthProvider>
        <DashProvider>
          <UserProvider>
            <StylesProvider injectFirst>
              <AccountProvider>
                <EditAccountProvider>{props.children}</EditAccountProvider>
              </AccountProvider>
            </StylesProvider>
          </UserProvider>
        </DashProvider>
      </AuthProvider>
    </UserListProvider>
  );
};

export default MaxProvider;
