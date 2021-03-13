import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <Router>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/search">
            Search page
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
