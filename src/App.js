// src/App.js
import React from 'react';
import Calendar from './components/Calendar';
import ProgressChart from './components/ProgressChart';
import Visualization from './components/Visualization';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Seguimiento de Virtudes</h1>
      <Calendar />
      <ProgressChart />
      <Visualization />
    </div>
  );
};

export default App;
