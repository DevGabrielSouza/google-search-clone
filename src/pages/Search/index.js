import React, { useContext } from 'react'

// Context
import SearchContext from './../../components/Search/context.js';

export default function Search() {

    const { searchResults } = useContext(SearchContext);

    const searchResultItems = searchResults.items;

    console.log(searchResults);

    return (
        <div>
            search pagea
        </div>
    )
}
