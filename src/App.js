import './App.css';
import Home from './pages/Home';

import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Context
import SearchContext from './components/Search/context.js';
import Search from './pages/Search';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({});

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, searchResults, setSearchResults}}>
      <div className="app">

        <Router>

          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/search">
              <Search />
            </Route>

          </Switch>

        </Router>

      </div>
    </SearchContext.Provider>
  );
}

export default App;
