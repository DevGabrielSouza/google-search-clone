import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import SearchList from '../../components/SearchList/index.js';
import './style.css';

import axios from 'axios';

// Context
import SearchContext from './../../components/Search/context.js';
import SearchInput from './../../components/SearchInput/index.js';

export default function Search() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const searchedTerm = urlParams.get('q');

    const { searchResults, getSearchResults } = useContext(SearchContext);

    const [searchResultItems, setSearchResultItems] = useState([]);

    useEffect(() => {
        if( searchResults.items && searchResults.items > 0 ){
        

            setSearchResultItems(searchResults.items);
    
            
        }else{
            const googleCustomSearchApiUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBOiAGGbzofGZVls20Ubvh599b0cMvutfc&cx=65763cfd0eb1c2db2&q=${searchedTerm}`
    
    
            axios.get(googleCustomSearchApiUrl)
            .then(function(response){
                setSearchResultItems(response.data.items)
    
            })
        }
    }, [searchedTerm])
    
    return (
        <div className="searchPage">

            <header className="searchHeader">
              <Link to="/">
                    <img width="120" src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg" alt="Google Clone"/>
              </Link>

              <form action="/search" onSubmit={getSearchResults} className="search">
                 <SearchInput />
              </form>
              
            </header>

            <SearchList items={searchResultItems} />
        </div>
    )
}
