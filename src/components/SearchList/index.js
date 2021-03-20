import React from 'react'
import SearchItem from '../SearchItem';
import './style.css';

export default function SearchList({items}) {
    return (
        <div className="searchList">
            {items.map((item, index) => (
                <SearchItem index={index} item={item} />
            ))}
        </div>
    )
}
