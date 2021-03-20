import React from 'react'
import './style.css';

export default function SearchItem({item}) {

    return (
        <div className="searchItem">

            <div className="searchItem__displayLink">
                { item.displayLink }
            </div>

            <div className="searchItem__formattedUrl">
                <a href={ item.formattedUrl }>
                    { item.title }
                </a>
            </div>

            <div className="searchItem__description">
                <p>
                    { item.snippet }
                </p>
            </div>

        </div>
    )
}
