import React, { Component } from "react";
import api from "../api/index";
import { Link } from "react-router-dom";

import {
  Container,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import CreatePlayer from "./createPlayer";
import BasicForm from "./basicForm";

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
      ligaId: props.match.params.id,
      nombre: "",
      directorN: "",
      directorA: "",
      directorC: "",
      directorE: "",
      directorT: "",
      directorD: "",
      jugador: "",
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

  inputChange = e => {
    e.preventDefault();
    const name = e.target.attributes.name.value;
    const value = e.target.value;
    console.log(e.target);

    console.log(name);
    console.log(value);
    this.setState({ [name]: value });

    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <Link
          to={{
            pathname: `/ligaDetail/${this.state.id}`,
            query: {
              id: this.state.id
            }
          }}
        >
          <button
            className="btn btn-success m-4 "
            // style={{ margin: "20px auto" }}
            type="submit"
          >
            Regresar
          </button>
        </Link>

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
                onChange={event => this.inputChange(event)}
                style={inputSty}
                type="name"
                name="nombre"
                placeholder="Nombre"
                className="col-6"
              />
            </FormGroup>
            <BasicForm
              title={"Director"}
              directorN={this.state.directorN}
              directorA={this.state.directorA}
              directorE={this.state.directorE}
              directorT={this.state.directorT}
              directorD={this.state.directorD}
              directorC={this.state.directorC}
              handleStateChange={this.inputChange}
            ></BasicForm>
            <CreatePlayer />
          </Form>
          <h3>{this.state.id}</h3>
          <h4>{this.state.contacto}</h4>
        </div>
      </React.Fragment>
    );
  }
}

export default createTeam;
