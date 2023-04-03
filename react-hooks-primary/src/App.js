import React, { useState } from 'react';
import './App.css';
import Page from './components/Page.js';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={'서진웅'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  )
  
}

export default App