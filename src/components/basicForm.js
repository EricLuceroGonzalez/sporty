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

class BasicForm extends Component {
  constructor(props) {
    super(props);
    console.dir(props);
    this.state = {
      id: "",
      title: this.props.title,
      directorN: this.props.directorN,
      inputChange: this.props.handleStateChange,
      directorA: "",
      directorC: "",
      directorE: "",
      directorT: "",
      directorD: "",
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
              name="directorN"
              placeholder="Nombre"
              className="col-6"
            />
            <Input
            onChange={event => this.state.inputChange(event)}
              style={inputSty}
              type="name"
              name="directorA"
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
            name="directorT"
            placeholder="Telefono"
            className="col-6"
          />
          <Input
          onChange={event => this.state.inputChange(event)}
            style={inputSty}
            type="number"
            name="directorC"
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
        //   onChange={event => this.state.inputChange(event)}
            style={inputSty}
            type="date"
            name="FechaNac"
            id="exampleFechaNac"
            placeholder="Fecha de nacimiento"
            className="col-6"
          />
          <Input
          onChange={event => this.state.inputChange(event)}
            style={inputSty}
            type="name"
            name="directorE"
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
export default BasicForm;
