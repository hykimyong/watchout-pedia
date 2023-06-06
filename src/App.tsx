import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import MainPage from './pages/MainPage';
import MovieDetail from './pages/MovieDetail';
import TvDetail from './pages/TvDetail';
import TvPage from './pages/TvPage';


function App() {
  return (
    <Router>
        <div>
          <Switch>
            <Route path="/" component={MainPage} />
            <Route path="/tv" component={TvPage} />
            <Route path="/movie/:id" component={MovieDetail} />
            <Route path="/tv/:id" component={TvDetail} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
