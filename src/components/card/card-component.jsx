import React, { useState,useEffect } from 'react'
import './card-component-styles.css'
import Amount from '../amount/amount-component.jsx'
import DropDown from '../drop-down/drop-down-component.jsx'
import Button from '../button/button-component.jsx'
import ConversionResult from '../conversion-result/conversion-result-component'
import Data from '../../data-source/Data'

const Card = () => {
    const [currenciesList, setCurrenciesList] = useState([])
    const [moneyAmount, setMoneyAmount] = useState('')
    const [warning, setWarning] = useState(false)
    const [fromCurrency, setFromCurrency]=useState('USD')
    const [toCurrency, setToCurrency]=useState('EUR')

    //This simulate a request for the data to the server
    useEffect((()=>{
        const sortedCurrencies=Data.exchangeRates.sort((a,b)=>a.code.localeCompare(b.code))
        setCurrenciesList(sortedCurrencies)
      }),[])

    const AmountToConvert = e => {
        setMoneyAmount(e.target.value)
        if(!isNaN(e.target.value) && Number(moneyAmount)) 
        setWarning(false)
    }

    const ValidationFunction = e => {
        if(e.key!=='Enter')
        !isNaN(e.key) && !moneyAmount.includes('/') && !moneyAmount.includes('*') ? setWarning(false) : setWarning(true)
    }

    const swapHandler = () => {
        const swap=fromCurrency
        setFromCurrency(toCurrency)
        setToCurrency(swap)
    }

    const resetHandler = () => {
        setMoneyAmount('')
        setFromCurrency('USD')
        setToCurrency('EUR')
        setWarning(false)
    }

    return (
        <div className='card-container'>
            <Amount moneyAmount={moneyAmount} AmountToConvert={AmountToConvert} ValidationFunction={ValidationFunction} warning={warning} label='Amount'/>
            <Button type='Swap' buttonHandler={swapHandler}/>
            <DropDown currenciesList={currenciesList} selectedCurrency={fromCurrency} label='From' currencyHandler={e => setFromCurrency(e.target.value)}/>
            <DropDown currenciesList={currenciesList} selectedCurrency={toCurrency} label='To' currencyHandler={e => setToCurrency(e.target.value)}/>
            <Button type='Reset' buttonHandler={resetHandler}/>
            <ConversionResult  moneyAmount={moneyAmount} fromCurrency={fromCurrency} toCurrency={toCurrency} currenciesList={currenciesList} warning={warning}/> 
        </div>)
}

export default Card