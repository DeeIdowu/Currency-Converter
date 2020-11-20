import React, {useEffect, useState} from 'react';
import CurrencyRow from './components/CurrencyRow';
import './App.css';

const BASE_URL="https://api.exchangeratesapi.io/latest"

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState([])
  const [toCurrency, setToCurrency] = useState([])



  useEffect(()=>{
      fetch(BASE_URL)
        .then(res => res.json())
        .then(data =>{
          const firstCurrency = Object.keys(data.rates)[0]
          setCurrencyOptions([data.base, ...Object.keys(data.rates)])
          setFromCurrency(data.base)
          setToCurrency(firstCurrency)
        })
  }, [])

  return (
    <div className="App">
        <h1>Welcome to the Currency Converter</h1>
        <CurrencyRow
          currencyOptions = {currencyOptions}
          selectCurrency={fromCurrency}
        />
        <div className="equals">=</div>
        <CurrencyRow
          currencyOptions = {currencyOptions}
          selectCurrency={toCurrency}
        />
    </div>
  );
}

export default App;
