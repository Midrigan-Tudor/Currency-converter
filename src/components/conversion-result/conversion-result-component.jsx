import React from 'react'
import './conversion-result-component-styles.css'

const ConversionResult = ({ moneyAmount,warning,fromCurrency,toCurrency,currenciesList}) => {
    let rate
    if(fromCurrency===toCurrency){
        rate=1
    }
    else if(fromCurrency==='USD'){
        const indexOfRateTo=currenciesList.map(el=>el.code).findIndex(el=>el===toCurrency)
        rate=currenciesList[indexOfRateTo]?.rate
    }
    else if(toCurrency==='USD'){
        const indexOfRateFrom=currenciesList.map(el=>el.code).findIndex(el=>el===fromCurrency)
        rate=1/currenciesList[indexOfRateFrom]?.rate
    }
    else{
        const indexOfRateFrom=currenciesList.map(el=>el.code).findIndex(el=>el===fromCurrency)
        const indexOfRateTo=currenciesList.map(el=>el.code).findIndex(el=>el===toCurrency)
        rate=1/currenciesList[indexOfRateFrom]?.rate*currenciesList[indexOfRateTo]?.rate
    }
    return (
        <div className='conversion-result-container'>
           { warning || moneyAmount==='' ? null:<p> {`${moneyAmount} ${fromCurrency} = ${parseFloat((moneyAmount*rate).toFixed(2))} ${toCurrency}`} </p> } 
        </div>)
}

export default ConversionResult