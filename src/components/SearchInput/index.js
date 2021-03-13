import React from 'react'
import './style.css';

//Icons
import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';

function SearchInput() {
    return (
        <div className="searchInput">
            <SearchIcon className="searchInput__icon" />
            <input type="text" placeholder="Type here..." />
            <KeyboardIcon className="searchInput__icon" />
            <MicIcon className="searchInput__icon" />
        </div>
    )
}

export default SearchInput
