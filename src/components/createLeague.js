import React, { Component } from "react";
import {
  Container,
  ButtonGroup,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import api from "../api/index";

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
  fontSize: '8px',
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

const clickedBtn = {
  backgroundColor: "green"
};

const noClickedBtn = {
  backgroundColor: "gray"
};

class CreateLeague extends Component {
  state = {
    sportsList: [],
    deporte: "",
    nombreLiga: "",
    descripcion: "",
    organizador: {
      nombre: "",
      apellido: "",
      cedula: "",
      fechaDeNac: "",
      telefono: "",
      direccion: ""
    },

    fechaCreada: "",
    toggleBtn: false
  };

  componentDidMount() {
    api
      .getSports()
      .then(res => {
        console.log({
          mensaje: "Get exitoso",
          response: res.data
        });
        this.setState({
          sportsList: res.data
        });
      })
      .catch(err => {
        console.log({
          mensaje: "Get Fallido",
          response: err.data
        });
      });
  }

  sendFormData = () => {
    api
      .postLigas(this.state)
      .then(res => {
        console.log(this.state);
        console.log(res);

        console.log({
          mensaje: "Post exitoso",
          response: res.data
        });
      })
      .catch(err => {
        console.log({
          mensaje: "Post Fallido",
          response: err
        });
      });
  };

  selectChange = e => {
    e.preventDefault();
    const name = e.target.attributes.name.value;
    const value = e.target.value;
    console.log(`value: ${value}`);
    console.log(`name: ${name}`);

    this.setState({ fechaCreada: this.getCurrentDate() });
    this.state.sportsList.filter(item => {
      item.nombre === value
        ? this.setState({ [name]: item._id })
        : console.log("ni verga");
    });
  };

  selectChangeBtn = e => {
    e.preventDefault();
    // const name = e.target.attributes.name.value;
    const name = e.target.name;
    const value = e.target.textContent;

    this.setState({ fechaCreada: this.getCurrentDate(), toggleBtn: true });
    this.state.sportsList.filter(item => {
      item.nombre === value
        ? this.setState({ [name]: item._id })
        : console.log("");
    });
  };

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

  inputChangeB = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    console.log(value);

    this.setState(prevState => {
      let organizador = Object.assign({}, prevState.organizador); // creating copy of state variable organizador
      organizador[name] = value; // update the name property, assign a new value
      return { organizador }; // return new object organizador object
    });
    console.log(this.state);
  };

  renderDeportes = () => {
    const listDeportes = this.state.sportsList.map((items, i) => {
      return (
        <option
          onClick={event => this.selectChange(event)}
          name="deporte"
          key={i}
        >
          {items.nombre}
        </option>
      );
    });
    return listDeportes;
  };

  renderDeportesss = () => {
    const listDeportes = this.state.sportsList.map((items, i) => {
      return (
        <Button
          onClick={event => this.selectChangeBtn(event)}
          style={this.state.toggleBtn === false ? noClickedBtn : clickedBtn}
          name="deporte"
          className="col-3 mr-2 ml-2 mb-2"
          key={i}
        >
          {items.nombre}
        </Button>
      );
    });
    return listDeportes;
  };

  calculateAge = e => {
    console.log("calculateAge()");
    console.log(e.target.value);
    this.setState({ fechaDeNac: e.target.value });
  };

  getCurrentDate = () => {
    let separator = "-";
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date} ${hour}:${minutes}:${seconds}`;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container col-md-8 mt-6" style={standardBg}>
          <Form style={formBg}>
            <div className="mt-4">
              <h3 style={labelNameSty}>Datos de la liga</h3>
              <hr></hr>
            </div>
            <FormGroup>
              <Label style={labelSty} for="exampleSelect">
                Seleccionar deporte
              </Label>
              <ButtonGroup>
                <Container>
                  <div className="row justify-content-center">
                    {this.renderDeportesss()}
                  </div>
                </Container>
              </ButtonGroup>
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleSelect">
                Seleccionar deporte
              </Label>
              <Input style={inputSty} type="select" id="exampleSelect">
                {this.renderDeportes()}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleName">
                Nombre de la liga
              </Label>
              <Input
                onChange={event => this.inputChange(event)}
                style={inputSty}
                type="name"
                name="nombreLiga"
                placeholder="Nombre"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleText">
                Descripcion de la liga
              </Label>
              <Input
                onChange={event => this.inputChange(event)}
                style={inputSty}
                type="textarea"
                name="descripcion"
                id="exampleText"
                rows="1"
              />
            </FormGroup>
            <div className="mt-4">
              <h3 style={labelNameSty}>Organizador</h3>
              <hr></hr>
            </div>
            <FormGroup>
              <Label style={labelSty} for="exampleName">
                Nombre
              </Label>
              <Input
                onChange={event => this.inputChangeB(event)}
                style={inputSty}
                type="name"
                name="nombre"
                placeholder="Nombre"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleName">
                Apellido
              </Label>
              <Input
                onChange={event => this.inputChangeB(event)}
                style={inputSty}
                type="name"
                name="apellido"
                placeholder="Apellido"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleName">
                Telefono
              </Label>
              <Input
                onChange={event => this.inputChangeB(event)}
                style={inputSty}
                type="number"
                name="telefono"
                placeholder="Celular"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleName">
                Cedula
              </Label>
              <Input
                onChange={event => this.inputChangeB(event)}
                style={inputSty}
                type="name"
                name="cedula"
                placeholder="No. de cedula"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleFechaNac">
                Fecha de Nacimiento
              </Label>
              <Input
                onChange={event => this.calculateAge(event)}
                style={inputSty}
                type="date"
                name="FechaNac"
                id="exampleFechaNac"
                placeholder="Fecha de nacimiento"
              />
            </FormGroup>
            <FormGroup>
              <Label style={labelSty} for="exampleName">
                Direccion
              </Label>
              <Input
                onChange={event => this.inputChangeB(event)}
                style={inputSty}
                type="name"
                name="direccion"
                placeholder="Direccion"
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
        </div>
      </React.Fragment>
    );
  }
}

export default CreateLeague;
