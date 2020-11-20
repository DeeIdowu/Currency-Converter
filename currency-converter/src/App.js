import React, {useEffect, useState} from 'react';
import CurrencyRow from './components/CurrencyRow';
import './App.css';

const BASE_URL="https://api.exchangeratesapi.io/latest"

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])

  useEffect(()=>{
      fetch(BASE_URL)
        .then(res => res.json())
        .then(data =>{
          setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        })
  }, [])

  return (
    <div className="App">
        <h1>Welcome to the Currency Converter</h1>
        <CurrencyRow/>
        <div className="equals">=</div>
        <CurrencyRow/>
    </div>
  );
}

export default App;
