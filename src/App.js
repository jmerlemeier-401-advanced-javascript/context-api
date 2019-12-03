import React from 'react';
import Main from './main';
import './App.css';

import SettingsContext from './components/settings/site-context';

function App() {
  return (
   
      <SettingsContext>
      <Main />
      </SettingsContext>
  
  );
}

export default App;
