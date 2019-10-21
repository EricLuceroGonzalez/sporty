import React, { Component } from "react";
import api from "../api/index";
import { Spinner } from "reactstrap";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table
} from "reactstrap";
import CreatePlayer from "./createPlayer";
import PlayersList from "./PlayersList";

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
    equipoId: this.props.equipoId,
    ligaId: this.props.ligaId,
    deporte: this.props.deporte,
    nombre: this.props.nombre,
    director: this.props.director,
    capitan: this.props.capitan,
    players: [],
    togglePayers: false
  };

  componentDidMount() {
    api
      .getPlayers()
      .then(res => {
        console.log({
          mensaje: "Get exitoso! - getJugadores",
          response: res.data
        });
        this.setState({
          players: res.data.filter(
            itemId => itemId.equipoId === this.state.equipoId
          )
          //   res.data.filter(itemId => itemId == this.state.equipoId)
        });
      })
      .catch(err => {
        console.log({
          mensaje: "Error - getJugadores",
          response: err
        });
      });
  }

  createPlayerToggle = () => {
    console.log("createPlayerToggle");
    console.log(this.state.players);

    if (this.state.togglePayers) {
      this.setState({ togglePayers: false });
    } else {
      this.setState({ togglePayers: true });
    }
  };
  PlayerCreateMenu = () => {
    if (this.state.togglePayers) {
      return (
        <CreatePlayer
          ligaId={this.state.ligaId}
          equipoId={this.state.equipoId}
        ></CreatePlayer>
      );
    } else {
      return "Fuck";
    }
  };

  renderPlayers = () => {
    console.log("render fucking playaaa");

    if (this.state.players.length === 0) {
      return (
        <div className="justify-content-center">
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />
        </div>
      );
    } else {
      return <PlayersList players={this.state.players}></PlayersList>;
    }
  };

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
              <div className="mr-auto">{this.state.nombre}</div>
              <button
                className="btn btn-success my-2 my-sm-0"
                style={impact}
                onClick={this.createPlayerToggle}
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
            </CardText>
          </CardBody>
          {this.PlayerCreateMenu()}
          {this.renderPlayers()}
        </Card>
      </div>
    );
  }
}

export default TeamsList;
