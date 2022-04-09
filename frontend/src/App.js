import { ThemeProvider } from '@mui/material';
import React from 'react';
import { AppView } from './components/AppView';
import { AppContextProvider } from './contexts/AppContext';
import { lightTheme } from './contexts/settings/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppContextProvider>
        <AppView />
      </AppContextProvider>
    </ThemeProvider>
  )
}

export default App;
