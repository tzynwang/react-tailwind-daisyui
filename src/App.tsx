/* eslint-disable */
import React, { useState, useEffect } from 'react';

function App(): React.ReactElement {
  // States
  const [theme, setTheme] = useState<'garden' | 'coffee'>('coffee');

  // Functions
  const handleThemeToggle = (): void => {
    setTheme(prev => prev !== 'garden' ? 'garden' : 'coffee');
  }

  // Hooks
  useEffect(() => {
    const h = document.querySelector('html');
    if (h) {
      h.dataset.theme = theme;
    }
  }, [theme]);

  // Main
  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button className="btn btn-primary" onClick={handleThemeToggle}>toggle theme between garden and coffee</button>
    </div>
  );
}

export default App;
