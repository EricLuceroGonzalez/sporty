import React, { Component } from "react";
// import api from "../api/index";
// import { Link } from "react-router-dom";
import "./someStyle.css";
import {
  // Container,
  // ButtonGroup,
  Button,
  // Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const inputSty = {
  outline: "none",
  display: "block",
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

class BasicForm extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      ligaId: this.props.id,
      title: this.props.title,
      directorN: this.props.directorN,
      inputChange: this.props.handleStateChange,
      calculateAge: this.props.calculateAge,
      sendTeamData: this.props.sendTeamData,
      nombre: "",
      apellido: "",
      cedula: "",
      edad: this.props.edad,
      telefono: "",
      direccion: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="mt-4">
          <h3 style={labelNameSty}>{this.state.title}</h3>
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
              onChange={event => this.state.inputChange(event)}
              style={inputSty}
              type="name"
              name="nombre"
              placeholder="Nombre"
              className="col-6"
            />
            <Input
              onChange={event => this.state.inputChange(event)}
              style={inputSty}
              type="name"
              name="apellido"
              placeholder="Apellido"
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
            onChange={event => this.state.inputChange(event)}
            style={inputSty}
            type="number"
            name="telefono"
            placeholder="Telefono"
            className="col-6"
          />
          <Input
            onChange={event => this.state.inputChange(event)}
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
            onChange={event => this.state.calculateAge(event)}
            style={inputSty}
            type="date"
            name="FechaNac"
            id="exampleFechaNac"
            placeholder="Fecha de nacimiento"
            min="1940-01-01"
            max="2019-12-31"
            className="col-6"
          />
          {/*
            <Input
            onChange={event => this.state.inputChange(event)}
            style={inputSty}
            type="name"
            name="edad"
            placeholder="Edad"
            className="col-6"
          ></Input>
*/}
          <h3 className="col-6">{this.state.edad}</h3>
        </FormGroup>

        <FormGroup check>
          <Label style={labelSty} check>
            <Input type="checkbox" />
            Check me out
          </Label>
        </FormGroup>
        <Button onClick={this.state.sendTeamData}>Submit</Button>
      </React.Fragment>
    );
  }
}
export default BasicForm;
