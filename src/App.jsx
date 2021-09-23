import './App.css';
import LandingPage from './LandingPage.jsx';
import Navigationbar from './Navigationbar.jsx';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/LandingPage' component={LandingPage}/>
          <Route path='/Navigationbar' component={Navigationbar}/>
        </Switch>
    </div>
  );
}

export default App;
