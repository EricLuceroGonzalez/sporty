import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home";
import Teams from "./components/teams";
import Navbar from "./components/navBar";
import LogIn from "./components/login";
import Futbol from "./components/Sports/Futbol";
import CreateLeague from "./components/createLeague";
import Beisbol from "./components/Sports/Beisbol";
import Volleyball from "./components/Sports/Voleyball";
import Baloncesto from "./components/Sports/Baloncesto";
import Natacion from "./components/Sports/Natacion";
import Futsal from "./components/Sports/Futsal";
import Billar from "./components/Sports/Billar";
import Softball from "./components/Sports/Softball";
import FlagFootball from "./components/Sports/Flag";
import AllSports from "./components/Sports/AllSports";
import LigaDetail from "./components/LigaDetail";
import createTeam from "./components/createTeam";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/login" component={LogIn} />
          <Route path="/newLiga" component={CreateLeague} />
          <Route path="/futbol" component={Futbol} />
          <Route path="/beisbol" component={Beisbol} />
          <Route path="/voleyball" component={Volleyball} />
          <Route path="/baloncesto" component={Baloncesto} />
          <Route path="/natacion" component={Natacion} />
          <Route path="/futsal" component={Futsal} />
          <Route path="/billar" component={Billar} />
          <Route path="/softball" component={Softball} />
          <Route path="/flag" component={FlagFootball} />
          <Route path="/all" component={AllSports} />
          <Route exact path="/ligaDetail/:id" component={LigaDetail} />
          <Route exact path="/create/:id" component={createTeam} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
