import React, { Component } from "react";

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const standardBg = {
  boxShadow: "8px 8px 8px gray",
  background:
    "linear-gradient(90deg, rgba(249,56,155,1) 0%, rgba(42,241,185,0.8) 100%)",
  border: "1px solid gray",
  padding: "70px 50px",
  margin: "30px auto"
};

const titleCard = {
  fontSize: "2em",
  fontWeight: "bolder"
};

const linkStyle = { textDecoration: "none", color: "rgba(10,25,255,1)" };

class Home extends Component {
  state = {
    sports: [
      { name: "Futbol", icona: "faFutbol" },
      { name: "Softball", icona: "faFutbol" },
      { name: "Beisbol", icona: "faFutbol" },
      { name: "Baloncesto", icona: "faFutbol" },
      { name: "Flag-Footbal", icona: "faFutbol" },
      { name: "Natacion", icona: "faFutbol" }
    ]
  };

  renderSports = () => {
    const listSports = this.state.sports.map((item, i) => {
      return (
        <div className="col-4" key={i}>
          <Link to={item.name} style={linkStyle}>
            <Card
              style={{
                margin: "12px auto",
                boxShadow: "4px 3px 6px black",
                backgroundColor: "rgba(12,242,142,1)"
              }}
            >
              <div className="container">
                <div className="justify-content-center">
                  <FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon>
                </div>
              </div>
              <CardBody>
                <CardTitle style={titleCard}>{item.name}</CardTitle>
                <CardSubtitle> {item.icona}</CardSubtitle>
                <CardText>
                  Text text text text text text text text text text text text
                  text text text
                </CardText>
              </CardBody>
            </Card>
          </Link>
        </div>
      );
    });
    return listSports;
  };
  render() {
    return (
      <React.Fragment>
        <div className="container col-md-8 mt-6" style={standardBg}>
          <h2>Eventos</h2>
          <div className="row">{this.renderSports()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
