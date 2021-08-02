import React from 'react'
import WarningMessage from './warning/warning-component.jsx'
import './amount-component-styles.css'

const Amount = ({ moneyAmount, AmountToConvert, warning,label }) => {
    return (
        <div className='amount-container'>
            <label htmlFor='amount' className='amount-label'>{label}</label>
            <input type='text' maxLength='6' className='amount-input' value={moneyAmount} onChange={AmountToConvert}
                 placeholder='Desired amount'> 
            </input>
            {warning ? <WarningMessage>Only number are allowed as input</WarningMessage> : null}
        </div>)
}

export default Amount