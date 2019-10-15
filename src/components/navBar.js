import React from "react";
import { withRouter, Link } from "react-router-dom";

const navStyle = {
  boxShadow: "0px 3px 8px black"
};
const navItem = {
  color: "white",
  fontWeight: "bolder",
  fontSize: "1.15em",
  padding: "5px 14px",
  textShadow: "2px 2px 1px black"
};
const impact = {
  color: "white",
  fontWeight: "bolder",
  fontSize: "1.5em",
  padding: "5px 14px",
  textShadow: "2px 2px 1px black"
};
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      sportsLinks: [
        "futbol",
        "beisbol",
        "voleyball",
        "baloncesto",
        "natacion",
        "futsal",
        "billar",
        "softball",
        "flag"
      ]
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  getNavLinkClass = path => {
    return this.props.location.pathname === path ? "active" : "";
  };
  render() {
    const colorBlue = { color: "#3b5999" };
    const linksNav = {
      margin: "0px 5px",
      color: "#3b5999",
      fontFamily: "Montserrat"
    };
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-primary myNav"
          style={navStyle}
        >
          <Link to={"/"} className="nav-link">
            <span className="navbar-brand" style={impact}>
              Sporty
            </span>
          </Link>
          <Link to={"/all"} style={navItem}>
          AllSports
        </Link>
          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav mr-auto">
              {this.state.sportsLinks.map((item, k) => {
                return (
                  <li key={k}>
                    <Link to={`/${item}`} style={navItem}>
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link to={"newLiga"}>
              <button
                className="btn btn-success my-2 my-sm-0"
                style={impact}
                type="submit"
              >
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
