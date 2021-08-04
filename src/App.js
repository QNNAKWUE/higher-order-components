import React from 'react';
import CounterA from './components/CounterA';
import CounterB from './components/CounterB';
import CounterC from './components/CounterC';
import './App.css';

function App() {
  return (
    <div className="App">
        <CounterA />
        <CounterB />
        <CounterC />
    </div>
  );
}

export default App;
