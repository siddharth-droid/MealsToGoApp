import React from "react";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
} from "../components/account.styles";
import { Button } from "react-native-paper";

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <Button icon = "lock-open-outline"
      mode = "contained"
      color = "black"
      onPress {() =>console.log("login")}
      <AccountContainer></AccountContainer>
    </AccountBackground>
  );
};
