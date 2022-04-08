import React, { useContext } from "react";
import { Login } from "./components/Login";
import { appContext, AppContextProvider } from "./contexts/AppContext";

function App() {
  const { loggedIn } = useContext(appContext);

  return (
    <AppContextProvider>
      {loggedIn ? <Login /> : <Login />}
    </AppContextProvider>
  )
}

export default App;
