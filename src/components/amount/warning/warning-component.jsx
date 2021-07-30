import React from 'react'
import './warning-component-styles.css'

const WarningMessage = (prop) => {
    return (
        <div className='warning-mesaje-container'>
            <p>{prop.children}</p>
        </div>);
}

export default  WarningMessage