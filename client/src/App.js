import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import { BrowserRouter as Router } from 'react-router-dom';

// context imports
import { ApexProvider } from './context/providers/ApexContext';

// component imports
import Header from './components/header/Header';
import Search from './components/search/Search';
import Profile from './components/profile/Profile';

function App() {
  return (
    <ApexProvider>
      <Router>
        <div className="App container">
          <Header />

          <Switch>
            <Route exact path="/" render={props => <Search {...props} />} />
            <Route
              path="/profile/:profile/:gamertag"
              render={props => <Profile {...props} />}
            />
          </Switch>
        </div>
      </Router>
    </ApexProvider>
  );
}

export default App;
