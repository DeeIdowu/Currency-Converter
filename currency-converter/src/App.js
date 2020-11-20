import React, {useEffect} from 'react';
import CurrencyRow from './components/CurrencyRow';
import './App.css';

const BASE_URL="https://api.exchangeratesapi.io/latest"

function App() {

  useEffect(()=>{
      fetch(BASE_URL)
        .then(res => res.json())
        .then(data => console.log(data))
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
