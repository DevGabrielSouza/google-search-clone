import React, { useContext } from 'react'
import './style.css';

//Icons
import SearchIcon from '@material-ui/icons/Search';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MicIcon from '@material-ui/icons/Mic';

//Context 
import SearchContext from '../Search/context';

function SearchInput() {

    const { searchTerm, setSearchTerm} = useContext(SearchContext);

    return (
        <div className="searchInput">
            <SearchIcon className="searchInput__icon" />
            <input name="q" type="text" onChange={e => setSearchTerm(e.target.value)} value={searchTerm} placeholder="Type here..." />
            <KeyboardIcon className="searchInput__icon" />
            <MicIcon className="searchInput__icon" />
        </div>
    )
}

export default SearchInput
