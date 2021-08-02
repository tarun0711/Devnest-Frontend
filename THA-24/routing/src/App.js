import React,{useState} from 'react';

import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from './components/About';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import HomePage from './components/HomePage';

import AppState from './context/AppState';

function App () {
  const[isAuth, setIsAuth] = useState(false)
  return (
    <div className="App">
    {/* <h1> Context Explorer</h1> */}
    <Router>
      <nav>
        <table>
          <tr>
          <td><Link to="/home">Home</Link></td>
          <td><Link to="/about">About</Link></td>
          <td><Link to="/profile">Profile</Link></td>
          <td><Link to="/dashboard">Dashboard</Link></td>
          </tr>
        </table>
      </nav>
      <AppState>
        <Switch>
          <Route exact path='/home' component={HomePage}>
            <HomePage isAuth={isAuth} setIsAuth={setIsAuth} />
          </Route>
          <Route exact path='/about' component={About}/>
          <Route exact path='/profile' component={Profile}>
            {isAuth? <Profile/>:<div style={{textAlign:"center"}}><h1>Log in Krle Bhai</h1></div>}
          </Route>
          <Route exact path='/dashboard' component={Dashboard}>
          {isAuth? <Dashboard/>:<div style={{textAlign:"center"}}><h1>Log in Krle Bhai</h1></div>}
          </Route>
        </Switch>
      </AppState>
    </Router>      
    </div>
  );
}

export default App;