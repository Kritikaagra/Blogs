import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Add from './components/Add';

function App() {
  return (
    <div>
      <Router basename="/">
        <Switch> 
          <Route exact path="/" component={Add}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;

