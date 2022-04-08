import React, { createContext, useCallback, useState } from "react";

const defaultValue = {
  loggedIn: false,
  setLogin: () => {},
};

export const appContext = createContext(defaultValue);

const { Provider } = appContext;

export function AppContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const setLogin = useCallback(() => {
    setLoggedIn(true);
  }, [setLoggedIn]);

  return <Provider value={{ loggedIn, setLogin }}>{children}</Provider>;
}
