import React, { Component } from "react";
import api from "../api/index";
class createTeam extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
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
          mensaje: "Error - LigaDetail",
          response: err
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h3>{this.state.id}</h3>
        <h4>{this.state.contacto}</h4>
      </React.Fragment>
    );
  }
}

export default createTeam;
