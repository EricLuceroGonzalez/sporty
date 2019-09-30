import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Teams from "./components/teams";
import Navbar from "./components/navBar";
import LogIn from "./components/login";
import Futbol from "./components/Sports/Futbol";
import CreateLeague from "./components/createLeague";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/teams" component={Teams} />
            <Route path="/login" component={LogIn} />
            <Route path="/Futbol" component={Futbol} />
            <Route path="/Create" component={CreateLeague}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
