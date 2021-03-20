import React, { useEffect, useState, useContext } from 'react'
import './style.css';

//Context
import SearchContext from './../Search/context.js';

//Icons
import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';


function SearchInput({ defaultValue, getSearchResults }) {

    const {searchTerm, setSearchTerm} = useContext(SearchContext);

    const [search, setSearch] = useState('');

    useEffect(() => {
        setSearchTerm(search);
    }, [search])

    return (
        <form action="/search" className="searchInput" onSubmit={getSearchResults}>
            <SearchIcon className="searchInput__icon" />
            <input name="q" type="text" onChange={e => setSearch(e.target.value)} value={defaultValue} placeholder="Type here..." />
            <KeyboardIcon className="searchInput__icon" />
            <MicIcon className="searchInput__icon" />
        </form>
    )
}

export default SearchInput
