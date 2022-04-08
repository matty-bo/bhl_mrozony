import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Dashboard } from './sites/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/dashboard'><Dashboard></Dashboard></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
