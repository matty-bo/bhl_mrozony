import React, { createContext, useCallback, useEffect, useState } from "react";

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

  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedIn");
    if (loggedUser === "user") {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  return (
    <Provider
      value={{
        loggedIn: loggedIn,
        setLogin,
        logout,
      }}
    >
      {children}
    </Provider>
  );
}
