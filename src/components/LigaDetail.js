import React, { Component } from "react";
import api from "../api/index";
import { Spinner } from "reactstrap";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { Link } from "react-router-dom";
import TeamsList from "./teamList";

const titleCard = {
  fontSize: "1.25em",
  fontWeight: "bolder",
  borderBottom: "2px solid gray"
};

const impact = {
  color: "white",
  fontWeight: "bolder",
  fontSize: "1.5em",
  padding: "5px 14px",
  textShadow: "2px 2px 1px black"
};
class LigaDetail extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      ligaTeams: [],
      id: props.match.params.id,
      deporte: "",
      nombre: "",
      descripcion: "",
      organizador: "",
      contacto: "",
      icono: ""
    };
  }

  componentDidMount() {
    api
      .getLigaId(this.state.id)
      .then(res => {
        console.log({
          mensaje: "Get exitoso! - LigaDetail",
          response: res.data.res
        });
        this.setState({
          deporte: res.data.res.deporte.nombre,
          nombre: res.data.res.nombreLiga,
          descripcion: res.data.res.descripcion,
          organizador: res.data.res.organizador.nombre,
          contacto: res.data.res.organizador.telefono,
          icono: ""
        });
      })
      .catch(err => {
        console.log({
          mensaje: "Error - getEquipos",
          response: err
        });
      });

    api
      .getEquipos()
      .then(res => {
        console.log({
          mensaje: "Get exitoso! - getEquipos",
          response: res
        });
        this.setState({
          ligaTeams: res.data.filter(
            leagueID => leagueID.ligaId == this.state.id
          )
        });
      })
      .catch(err => {
        console.log({
          mensaje: "Error - getEquipos",
          response: err
        });
      });
  }
  clicked = () => {
    console.log("here");
    console.log(this.state);
  };
  renderEquipos = () => {
    if (this.state.ligaTeams.length === 0) {
      return (
        <div className="justify-content-center">
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />
        </div>
      );
    } else {
      console.log(this.state);

      const listLigas = this.state.ligaTeams.map((item, i) => {
        return (
          <TeamsList
            key={i}
            nombre={item.nombre}
            director={item.director}
            capitan={item.capitan}
          ></TeamsList>
        );
      });
      return listLigas;
    }
  };
  render() {
    return (
      <div>
        <div
          className="col-xs-6 col-md-4 col-sm-6 col-lg-8 mt-4 ml-auto mr-auto"
          style={{ fontSize: "14px" }}
        >
          <Card
            style={{
              margin: "12px auto",
              boxShadow: "4px 3px 6px black",
              backgroundColor: "rgba(202,202,202,1)"
            }}
          >
            <CardHeader>
              <div className="row" style={{ padding: "0px 20px" }}>
                <div className="mr-auto" style={{ fontFamily: "courier" }}>
                  {this.state.nombre}
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <CardTitle style={titleCard}>{this.state.nombre}</CardTitle>
              <CardSubtitle>
                <span style={{ fontWeight: "bold" }}>Descripcion: </span>
                {this.state.descripcion}
              </CardSubtitle>
              <CardSubtitle style={{ color: "red" }}>
                <span style={{ fontWeight: "bold" }}>Organizada por: </span>
                {this.state.organizador}
              </CardSubtitle>
              <CardText>
                <span style={{ fontWeight: "bold" }}>Contacto: </span>
                {this.state.contacto}
              </CardText>
            </CardBody>
          </Card>

          <Card
            style={{
              margin: "12px auto",
              boxShadow: "4px 3px 6px black",
              backgroundColor: "rgba(202,202,202,1)"
            }}
          >
            <CardHeader>
              <div className="row" style={{ padding: "0px 20px" }}>
                <div
                  className="mr-auto"
                  style={{ fontSize: "1.5em", fontWeight: "bolder" }}
                >
                  Equipos
                </div>
                <Link
                  to={{
                    pathname: `/create/${this.state.id}`,
                    query: {
                      id: this.state.id
                    }
                  }}
                >
                  <button
                    className="btn btn-success my-2 my-sm-0"
                    style={impact}
                    type="submit"
                  >
                    Crear equipo
                  </button>
                </Link>
              </div>
            </CardHeader>
            {this.renderEquipos()}
          </Card>
        </div>
        <button onClick={this.clicked}>Click</button>
      </div>
    );
  }
}

export default LigaDetail;
