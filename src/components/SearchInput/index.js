import React from 'react'
import './style.css';

import { useState } from 'react';

//Icons
import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';

function SearchInput() {

    const [search, setSearch] = useState('');

    return (
        <div className="searchInput">
            <SearchIcon className="searchInput__icon" />
            <input type="text" onChange={e => setSearch(e.target.value)} placeholder="Type here..." />
            <KeyboardIcon className="searchInput__icon" />
            <MicIcon className="searchInput__icon" />
        </div>
    )
}

export default SearchInput
