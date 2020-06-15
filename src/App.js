import React from 'react';
import logo from './logo.svg';
import './App.css';
import Knight from './Knight';
import Board from './Board';
function App() {
  return <Board knightPosition={[0, 0]} />;
}

export default App;
