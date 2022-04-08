import React, { createContext, useCallback, useState } from "react";

const defaultValue = {
  loggedIn: false,
  setLogin: () => void 0,
  logout: () => void 0,
};

export const appContext = createContext(defaultValue);

const { Provider } = appContext;

export function AppContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const setLogin = useCallback(() => {
    setLoggedIn(true);
  }, [setLoggedIn]);

  const logout = useCallback(() => {
    setLoggedIn(false);
  }, [setLoggedIn]);

  return <Provider value={{ loggedIn, setLogin, logout }}>{children}</Provider>;
}
