import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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

const standardBg = {
  boxShadow: "8px 8px 8px gray",
  background:
    "linear-gradient(90deg, rgba(49,56,155,1) 0%, rgba(42,211,185,0.8) 100%)",
  border: "1px solid gray",
  padding: "70px 50px",
  margin: "30px auto"
};
const formBg = {
  backgroundColor: "white",
  padding: "10px 15px",
  borderRadius: "16px"
};

class CreateLeague extends Component {
  state = {
    sports: [
      { name: "Futbol", icona: "faFutbol" },
      { name: "Softball", icona: "faFutbol" },
      { name: "Beisbol", icona: "faFutbol" },
      { name: "Baloncesto", icona: "faFutbol" },
      { name: "Flag-Footbal", icona: "faFutbol" },
      { name: "Natacion", icona: "faFutbol" }
    ]
  };

  renderSports = () => {
    const listSports = this.state.sports.map((item, i) => {
      return <option key={i}>{item.name}</option>;
    });
    return listSports;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container col-md-8 mt-6" style={standardBg}>
          <h1>Crear liga</h1>
          <Form style={formBg}>
            <div className="mt-4">
              <h3 style={labelNameSty}>Datos Personales</h3>
              <hr></hr>
            </div>
            <FormGroup>
              <Label style={labelSty} for="exampleEmail">
                Email
              </Label>
              <Input
                style={inputSty}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="correo electronico"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleName">
                Nombre
              </Label>
              <Input
                style={inputSty}
                style={inputSty}
                type="name"
                name="name"
                id="examplename"
                placeholder="name"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleFechaNac">
                Fecha de Nacimiento
              </Label>
              <Input
                style={inputSty}
                type="date"
                name="FechaNac"
                id="exampleFechaNac"
                placeholder="Fecha de nacimiento"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleId">
                Cedula
              </Label>
              <Input
                style={inputSty}
                type="number"
                name="idCard"
                id="exampleidCard"
                placeholder="Cedula"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleText">
                Text Area
              </Label>
              <Input
                style={inputSty}
                type="textarea"
                name="text"
                id="exampleText"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleFile">
                File
              </Label>
              <Input
                style={inputSty}
                type="file"
                name="file"
                id="exampleFile"
              />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>

            <div className="mt-4">
              <h3 style={labelNameSty}>Datos de la liga</h3>
              <hr></hr>
            </div>
            <FormGroup>
              <Label style={labelSty} for="exampleSelect">
                Seleccionar deporte
              </Label>
              <Input
                style={inputSty}
                type="select"
                name="select"
                id="exampleSelect"
              >
                {this.renderSports()}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleSelect">
                Numero de equipos
              </Label>
              <Input
                style={inputSty}
                type="number"
                name="idCard"
                id="exampleidCard"
                placeholder="Cantidad de equipos"
              />
            </FormGroup>

            <FormGroup check>
              <Label style={labelSty} check>
                <Input type="checkbox" /> Check me out
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateLeague;
