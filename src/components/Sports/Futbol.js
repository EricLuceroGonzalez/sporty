import React, { Component } from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import CreateLeagueBtn from "../createLeagueBtn";

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
class Futbol extends Component {
  state = {
    ligas: [
      { name: "Liga 1", descript: "La liga 1" },
      { name: "Liga 2", descript: "La liga 2" },
      { name: "Liga 3", descript: "La liga 3" },
      { name: "Liga 4", descript: "La liga 4" },
      { name: "Liga 5", descript: "La liga 5" },
      { name: "Liga 6", descript: "La liga 6" }
    ]
  };
  renderLigas = () => {
    const listLigas = this.state.ligas.map((item, i) => {
      return (
        <div className="col-4" key={i}>
          <Card
            style={{
              margin: "12px auto",
              boxShadow: "4px 3px 6px black",
              backgroundColor: "rgba(12,242,142,1)"
            }}
          >
            <CardBody>
              <CardTitle style={titleCard}>{item.name}</CardTitle>
              <CardSubtitle> {item.descript}</CardSubtitle>
              <CardText>
                Text text text text text text text text text text text text text
                text
              </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
    return listLigas;
  };
  render() {
    return (
      <React.Fragment>
        <div className="container col-md-8 mt-6" style={standardBg}>
          <h2>Futbol</h2>
          <div className='row'>{this.renderLigas()}</div>
        </div>
        <CreateLeagueBtn></CreateLeagueBtn>
      </React.Fragment>
    );
  }
}

export default Futbol;
