import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import UserPage from './UserPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App container">
          <Route path="/find/:username" component={UserPage} />
        </div>
      </Router>
    );
  }
}

export default App;
