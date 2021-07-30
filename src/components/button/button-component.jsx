import React from 'react'
import './button-component-styles.css'

const Button = ({ type,buttonHandler }) => {
    return (
        <button className='button-style' onClick={buttonHandler}>{type}</button>
    )
}

export default Button