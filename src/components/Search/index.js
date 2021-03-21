import React, { useContext } from 'react'
import axios from 'axios';

import { useHistory  } from 'react-router-dom';

import './style.css';

// Components
import SearchInput from '../SearchInput'
import Button from './../Button/index';

// Context
import SearchContext from './context.js';

function Search() {

    const { searchTerm, setSearchResults} = useContext(SearchContext);
    const history = useHistory();

    function getSearchResults(e){

        e.preventDefault();

        const googleCustomSearchApiUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBOiAGGbzofGZVls20Ubvh599b0cMvutfc&cx=65763cfd0eb1c2db2&q=${searchTerm}`


        axios.get(googleCustomSearchApiUrl)
        .then(function(response){

            setSearchResults(response.data)

            history.push(`/search?q=${searchTerm}`);

        })
        
    }

    return (

            <form action="/search" onSubmit={getSearchResults} className="search">

                <SearchInput />

                <div className="search__buttons">

                    <Button type="submit">
                        Pesquisa Google
                    </Button>

                    <Button type="button">
                        Estou com sorte
                    </Button>

                </div>


            </form>
    )
}

export default Search
