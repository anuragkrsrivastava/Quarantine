import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import LogIn from './Pages/LogIn';
import Notice from './Pages/dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path = '/' component = {LogIn}></Route>
            <Route exact path = '/dashboard' component = {Notice}></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
