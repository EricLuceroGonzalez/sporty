import React, { Component } from "react";

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const standardBg = {
  // background: 'rgb(27,96,242)',
  background: 'linear-gradient(90deg, rgba(27,96,242,1) 0%, rgba(145,200,255,0.5) 100%)',
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
      { name: "Futbol"},
      { name: "Beisbol"}, 
      { name: "Volleyball"} ,
      { name: "Baloncesto"} ,
      { name: "Natacion"} ,
      { name: "Futsal"} ,
      { name: "Billar"} ,
      { name: "Flag"} ,
      { name: "Softball"} 
    ]
  };

  renderSports = () => {
    const listSports = this.state.sports.map((item, i) => {
      return (
        <div
        key={i}
        className="col-xs-10 col-md-4 col-sm-6 col-lg-3"
        style={{ fontSize: "10px" }}
      >
          <Link to={item.name} style={linkStyle}>
            <Card
              style={{
                margin: "12px auto",
                boxShadow: "4px 3px 6px black",
                backgroundColor: "rgba(242,242,242,1)"
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
        <div className="container col-sm-10 col-xs-10 col-md-8 mt-6" style={standardBg}>
          <h2>Eventos</h2>
          <div className="row">{this.renderSports()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
