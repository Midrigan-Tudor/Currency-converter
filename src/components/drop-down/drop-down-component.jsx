import React from 'react'
import './drop-down-component.css'

const DropDown = ({ currenciesList, selectedCurrency, label,currencyHandler }) => {
    return (
        <div  className='drop-down-container'>
            <label  htmlFor={label} className='drop-down-label'>{label}</label>
            <select  name='Currencies' className='drop-down-list' value={selectedCurrency} onChange={currencyHandler}>
                {currenciesList.map(el => <option key={el.code} value={el.code}>{el.code}</option>)}
            </select>
        </div>
    )
}

export default DropDown