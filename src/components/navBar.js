import React from "react";
import { withRouter, Link } from "react-router-dom";

const navStyle = {
  boxShadow: "0px 3px 8px black"
};
const impact = {
  color: "white",
  fontWeight: "bolder",
  fontSize: "1.5em",
  padding: '5px 14px',
  textShadow: "2px 2px 1px black"
};
class Navbar extends React.Component {
  getNavLinkClass = path => {
    return this.props.location.pathname === path ? "active" : "";
  };
  state = {
    sportsLinks: [
      "futbol",
      "beisbol",
      "voleyball",
      "baloncesto",
      "natacion",
      "futsal",
      "billar",
      "softball",
      "flag",
      "all"
    ]
  };
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-primary myNav"
          style={navStyle}
        >
          <Link to={"/"} className="nav-link">
            <span className="navbar-brand" style={impact}>
              Navbar
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              {this.state.sportsLinks.map((item, k) => {
                return (
                  <li key={k}>
                    <Link to={`/${item}`} className="nav-link">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to={"Create"}>
              <button className="btn btn-success my-2 my-sm-0" 
              style={impact}
              type="submit">
                Crea tu liga!
              </button>
            </Link>
          </div>
        </nav>

        {/**
          <Switch>
          <Route exact path="/" component={Footer} />
          <Route path="/Footer" component={Footer} />
        </Switch>
 */}
      </div>
    );
  }
}
Navbar = withRouter(Navbar);
export default Navbar;
