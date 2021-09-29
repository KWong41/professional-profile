import './App.css';
import LandingPage from './pages/LandingPage.jsx';
import Blog from './pages/Blog.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import { Route, Switch } from 'react-router-dom';
import React from 'react';

class App extends React.Component{
  
  render(){
  return (
    <div className="App">
        <Switch>
          <Route path='/LandingPage' component={LandingPage}/>
          <Route path='/Blog' component={Blog}/>
          <Route path='/Projects' component={Projects}/>
          <Route path='/Resume' component={Resume}/>
        </Switch>
    </div>
    );
  }
}

export default App;
