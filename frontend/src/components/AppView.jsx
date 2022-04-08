import React, { useContext } from "react";
import { appContext } from "../contexts/AppContext";
import { Login } from "./auth/Login";
import { Main } from "./Main";

export function AppView() {
  const { loggedIn } = useContext(appContext);

  return loggedIn ? <Main /> : <Login />
}