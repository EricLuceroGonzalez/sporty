import React, { Component } from "react";
import api from "../api/index";

class LigaDetail extends Component {
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
          // deporte: res.data.res.response.deporte,
          nombre: res.data.res.nombreLiga,
          descripcion: res.data.res.descripcion,
          organizador: res.data.res.organizador.nombre,
          contacto:  res.data.res.organizador.telefono,
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
      <div>
        <h1>LigaDetail</h1>
        <h2>id {this.state.id}</h2>
        <h2>id {this.state.id}</h2>
        <h2>id {this.state.nombre}</h2>
        <h2>id {this.state.organizador}</h2>
        <h2>id {this.state.contacto}</h2>
        <h2> id</h2>
      </div>
    );
  }
}

export default LigaDetail;
