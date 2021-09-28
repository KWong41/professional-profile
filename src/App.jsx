import './App.css';
import LandingPage from './LandingPage.jsx';
import Navigationbar from './Navigationbar.jsx';
import { Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import React from 'react';

class App extends React.Component{
  
  render(){
  return (
    <div className="App">
        <Switch>
          <Route path='/LandingPage' component={LandingPage}/>
        </Switch>
    </div>
    );
  }
}

export default App;
