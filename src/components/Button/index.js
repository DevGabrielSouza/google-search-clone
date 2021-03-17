import React from 'react'
import './style.css';

function Button({children, getSearchResults}) {
    return (
        <button className="button" onClick={getSearchResults}>
            { children }
        </button>
    )
}

export default Button
