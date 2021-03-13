import React from 'react'

import './style.css';

// Components
import SearchInput from '../SearchInput'
import Button from './../Button/index';

function Search() {
    return (
        <div className="search">

            <SearchInput />

            <div className="search__buttons">

                <Button>
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
