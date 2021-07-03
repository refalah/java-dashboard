import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import Register from "./Register";
import Dash from "./Dash";
import AdminHome from "./Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={Register}></Route>
        <Route path='/dashboard' exact component={Dash}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
