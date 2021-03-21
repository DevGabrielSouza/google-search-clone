import React, { useState } from 'react'
import './style.css';

//Icons
import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';


function SearchInput({ defaultValue }) {

    const [search, setSearch] = useState(defaultValue ? defaultValue : '');

    return (
        <div className="searchInput">
            <SearchIcon className="searchInput__icon" />
            <input name="q" type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder="Type here..." />
            <KeyboardIcon className="searchInput__icon" />
            <MicIcon className="searchInput__icon" />
        </div>
    )
}

export default SearchInput
