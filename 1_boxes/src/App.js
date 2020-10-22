import React from 'react';
import './App.css';
import Box from './Box'


function App() {
  return (
    <div className="container">
      <div className="boxes">
        <Box name = "Leila" title = "Leilainen" age = "19" />
        <Box name = "Ei Leila" title = "Eilainen" age = "27" />
        <Box name = "Leila-2" title = "Leilainen-kakkonen" age = "36" />
      </div>
    </div>
  );
}

export default App;
