import React from 'react'


 function CurrencyRow(props) {
     const{
         currencyOptions,
         selectedCurrency,
         onChangeCurrency
     } = props
    return (
        <div>
            <input type="number" className="input"/>
            <select value={selectedCurrency} onChange={}>
            {currencyOptions.map(option =>(
                <option key={option} value={option}>{option}</option>
            ))}   
            </select>
        </div>
    )
}

export default CurrencyRow;
