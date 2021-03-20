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

        

        const googleCustomSearchApiUrl = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBOiAGGbzofGZVls20Ubvh599b0cMvutfc&cx=65763cfd0eb1c2db2&q=${searchTerm}`


        axios.get(googleCustomSearchApiUrl)
        .then(function(response){

            setSearchResults(response.data)

            history.push(`/search?q=${searchTerm}`);

        })
        
    }

    return (

            <div className="search">

                <SearchInput getSearchResults={getSearchResults} />

                <div className="search__buttons">

                    <Button getSearchResults={getSearchResults}>
                        Pesquisa Google
                    </Button>

                    <Button>
                        Estou com sorte
                    </Button>

                </div>


            </div>
    )
}

export default Search
