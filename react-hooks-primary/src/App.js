import React, { useState } from 'react';
import './App.css';
import Page from './components/Page.js';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return <Page isDark={isDark} setIsDark={setIsDark} />;
}

export default App