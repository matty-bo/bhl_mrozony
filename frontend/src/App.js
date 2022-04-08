import React from 'react';
import { AppView } from './components/AppView';
import { AppContextProvider } from './contexts/AppContext';

function App() {
  return (
    <AppContextProvider>
      <AppView />
    </AppContextProvider>
  )
}

export default App;
