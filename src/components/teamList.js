import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const titleCard = {
  fontSize: "1.25em",
  fontWeight: "bolder",
  borderBottom: "2px solid gray"
};

const impact = {
    color: "white",
    fontWeight: "bolder",
    fontSize: "1.25em",
    padding: "5px 14px",
    textShadow: "2px 2px 1px black"
  };

class TeamsList extends Component {
  state = {
    id: this.props.id,
    deporte: this.props.deporte,
    nombre: this.props.nombre,
    director: this.props.director,
    capitan: this.props.capitan,
    players: this.props.players
  };

  componentDidMount() {
    console.log("111111");
    console.log(this.state);
  }
  render() {
    return (
      <div
        className="col-xs-10 col-md-10 col-sm-10 col-lg-10"
        style={{ fontSize: "10px" }}
      >
        <Card
          style={{
            margin: "12px auto",
            boxShadow: "4px 3px 6px black",
            backgroundColor: "rgba(112,252,212,1)"
          }}
        >
          <CardHeader>
            <div className="row" style={{ padding: "0px 20px" }}>
              <div className="mr-auto" >
                {this.state.nombre}
              </div>
              <button
              className="btn btn-success my-2 my-sm-0"
              style={impact}
              type="submit"
            >
              Crear jugador
            </button>
            </div>
          </CardHeader>
          <CardBody>
            <CardTitle style={titleCard}>{this.state.nombre}</CardTitle>
            <CardSubtitle>
              <span style={{ fontWeight: "bold" }}>Descripcion: </span>
              {this.state.nombre}
            </CardSubtitle>
            <CardSubtitle style={{ color: "red" }}>
              <span style={{ fontWeight: "bold" }}>Director: </span>
              {`${this.state.director.nombre} ${this.state.director.apellido}`}
            </CardSubtitle>
            <CardText>
              <span style={{ fontWeight: "bold" }}>Capitan: </span>
              {this.state.capitan}
            </CardText>
            <CardText>
              <span style={{ fontWeight: "bold" }}>Jugadores: </span>
              {this.state.players}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TeamsList;
