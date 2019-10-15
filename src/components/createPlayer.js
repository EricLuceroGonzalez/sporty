import React, { Component } from "react";
import api from "../api/index";
import { Link } from "react-router-dom";
import "./someStyle.css";
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

class CreatePlayer extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      id: "",
      deporte: "",
      nombre: "",
      descripcion: "",
      organizador: "",
      contacto: "",
      icono: "",
      dorsales: ["1", "2", "3",'4', '5', '6', '7'],
      posicion: ['portero', 'defensa', 'mediocampo', 'delantero']
    };
  }
  renderDorsales = () => {
    const listDorsales = this.state.dorsales.map((item, key) => {
      return (
        <option name="deporte" key={key}>
          {item}
        </option>
      );
    });
    return listDorsales;
  };
  renderPosicion = () => {
    const listPosicion = this.state.posicion.map((item, key) => {
      return (
        <option name="deporte" key={key}>
          {item}
        </option>
      );
    });
    return listPosicion;
  };

  render() {
    return (
      <React.Fragment>
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
              type="select"
              name="posicion"
              placeholder="Posicion"
              className="col-6"
            >
            {this.renderPosicion()}
            </Input>
            {/**<Input
              // onChange={event => this.inputChangeB(event)}
            //   style={inputSty}
            //   type="number"
            //   name="dorsal"
            //   placeholder="Numero"
            //   className="col-6" */}
            <Input type="select" id="exampleSelect"
            style={inputSty}
            className='col-6'>
              {this.renderDorsales()}
            </Input>
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
            type="number"
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
      </React.Fragment>
    );
  }
}
export default CreatePlayer;
