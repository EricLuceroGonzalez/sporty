import React, { Component } from "react";
import api from "../api/index";
import {
  Container,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const allBg = {
  margin: "12px auto",
  boxShadow: "4px 3px 6px black",
  backgroundColor: "rgba(202,202,202,1)",
  padding: "10px 20px",
  fontSize: "10px"
};

const inputSty = {
  outline: "none",
  display: "block",
  padding: "0px 25px",
  background: "rgba(1,1,1, 0.1)",
  width: "100%",
  border: "0",
  borderRadius: "4px",
  padding: "8px 20px",
  color: "gray",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease"
};

const labelSty = {
  display: "block",
  margin: "0 0 10px",
  color: "gray",
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em"
};

const labelNameSty = {
  display: "block",
  margin: "0 0 10px",
  color: "gray",
  fontSize: "20px",
  fontWeight: "500",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em"
};

const standardBg = {
  fontSize: "10px",
  boxShadow: "8px 8px 8px gray",
  background:
    "linear-gradient(90deg, rgba(49,56,155,1) 0%, rgba(42,211,185,0.8) 100%)",
  border: "1px solid gray",
  padding: "40px 20px",
  margin: "30px auto"
};
const formBg = {
  backgroundColor: "white",
  padding: "10px 15px",
  borderRadius: "16px"
};

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
        <button
          className="btn btn-success m-4 "
          // style={{ margin: "20px auto" }}
          type="submit"
        >
          Regresar
        </button>
        <div
          className="col-xs-10 col-md-8 col-sm-10 col-lg-8 mt-4 ml-auto mr-auto"
          style={allBg}
        >
          <Form style={formBg} className="col-sm-12 col-xs-12">
            <div className="mt-4">
              <h3 style={labelNameSty}>Datos del equipo</h3>
              <hr></hr>
            </div>
            <FormGroup className="col-12 row justify-content-start">
              <Label style={labelSty} for="exampleName" className="col-6">
                Nombre del equipo
              </Label>
              <Input
                // onChange={event => this.inputChange(event)}
                style={inputSty}
                type="name"
                name="nombreLiga"
                placeholder="Nombre"
                className="col-6"
              />
            </FormGroup>
            <div className="mt-4">
              <h3 style={labelNameSty}>Nuevo Jugador</h3>
              <hr></hr>
            </div>

            <div>
              <div className="row col-12">
                <div className="col-6">
                  {" "}
                  <Label style={labelSty} for="exampleName">
                    Nombre
                  </Label>
                </div>
                <div className="col-6">
                  {" "}
                  <Label style={labelSty} for="exampleName">
                    Apellido
                  </Label>
                </div>
              </div>
              <FormGroup className="col-12 row justify-content-start">
                <Input
                  // onChange={event => this.inputChangeB(event)}
                  style={inputSty}
                  type="name"
                  name="nombre"
                  placeholder="Nombre"
                  className="col-6"
                />
                <Input
                  // onChange={event => this.inputChangeB(event)}
                  style={inputSty}
                  type="name"
                  name="apellido"
                  placeholder="Apellido"
                  className="col-6"
                />
              </FormGroup>
            </div>
            <div>
              <div className="row col-12">
                <div className="col-6">
                  {" "}
                  <Label style={labelSty} for="exampleName">
                    Posicion
                  </Label>
                </div>
                <div className="col-6">
                  {" "}
                  <Label style={labelSty} for="exampleName">
                    Numero
                  </Label>
                </div>
              </div>
              <FormGroup className="col-12 row justify-content-start">
                <Input
                  // onChange={event => this.inputChangeB(event)}
                  style={inputSty}
                  type="name"
                  name="posicion"
                  placeholder="Posicion"
                  className="col-6"
                />
                <Input
                  // onChange={event => this.inputChangeB(event)}
                  style={inputSty}
                  type="number"
                  name="dorsal"
                  placeholder="Numero"
                  className="col-6"
                />
              </FormGroup>
            </div>
            <div className="row col-12">
              <div className="col-6">
                {" "}
                <Label style={labelSty} for="exampleName">
                  Telefono
                </Label>
              </div>
              <div className="col-6">
                {" "}
                <Label style={labelSty} for="exampleName">
                  Cedula
                </Label>
              </div>
            </div>
            <FormGroup className="col-12 row justify-content-start">
              <Input
                // onChange={event => this.inputChangeB(event)}
                style={inputSty}
                type="number"
                name="telefono"
                placeholder="Telefono"
                className="col-6"
              />
              <Input
                // onChange={event => this.inputChangeB(event)}
                style={inputSty}
                type="name"
                name="cedula"
                placeholder="No. de cedula"
                className="col-6"
              />
            </FormGroup>
            <div className="row col-12">
              <div className="col-6">
                {" "}
                <Label style={labelSty} for="exampleName">
                  Fecha de Nacimiento
                </Label>
              </div>
              <div className="col-6">
                {" "}
                <Label style={labelSty} for="exampleName">
                  Edad
                </Label>
              </div>
            </div>
            <FormGroup className="col-12 row justify-content-start">
              <Input
                // onChange={event => this.calculateAge(event)}
                style={inputSty}
                type="date"
                name="FechaNac"
                id="exampleFechaNac"
                placeholder="Fecha de nacimiento"
                className="col-6"
              />
              <Input
                // onChange={event => this.inputChangeB(event)}
                style={inputSty}
                type="name"
                name="direccion"
                placeholder="Edad"
                className="col-6"
              />
            </FormGroup>

            <FormGroup check>
              <Label style={labelSty} check>
                <Input type="checkbox" />
                Check me out
              </Label>
            </FormGroup>
            <Button onClick={this.sendFormData}>Submit</Button>
          </Form>
          <h3>{this.state.id}</h3>
          <h4>{this.state.contacto}</h4>
        </div>
      </React.Fragment>
    );
  }
}

export default createTeam;
