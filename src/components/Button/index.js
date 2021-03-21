import React from 'react'
import './style.css';

function Button({children, type}) {
    return (
        <button type={type} className="button">
            { children }
        </button>
    )
}

export default Button
