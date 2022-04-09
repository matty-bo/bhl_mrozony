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
    localStorage.setItem("loggedIn", "user");
    setLoggedIn(true);
  }, [setLoggedIn]);

  const logout = useCallback(() => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  }, [setLoggedIn]);

  return (
    <Provider
      value={{
        loggedIn: localStorage.getItem("loggedIn") === "user",
        setLogin,
        logout,
      }}
    >
      {children}
    </Provider>
  );
}
