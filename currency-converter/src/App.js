import React from 'react';
import CurrencyRow from './components/CurrencyRow';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Welcome to the Currency Converter</h1>
        <CurrencyRow/>
        <div>=</div>
        <CurrencyRow/>
    </div>
  );
}

export default App;
