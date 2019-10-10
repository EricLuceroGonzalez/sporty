import React, { Component } from "react";
import CreateLeagueBtn from "../createLeagueBtn";
import api from "../../api/index";
import { Spinner } from "reactstrap";
import LigasList from "../LigasList";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";


const standardBg = {
  boxShadow: "8px 8px 8px gray",
  background:
    "linear-gradient(90deg, rgba(249,56,155,1) 0%, rgba(42,241,185,0.8) 100%)",
  border: "1px solid gray",
  padding: "70px 50px",
  margin: "30px auto"
};

class Futbol extends Component {
  state = {
    ligas: []
  };

  componentDidMount() {
    api
      .getLigas()
      .then(res => {
        console.log({
          mensaje: "Get exitoso (FUT!)",
          response: res.data
        });
        res.data.filter((item, i) => {
          item.deporte.nombre === "Futbol"
            ? this.setState(prevState => ({
                ligas: [...prevState.ligas, item]
              }))
            : console.log("fuck");
        });
      })
      .catch(err => {
        console.log({
          mensaje: "Get Fallido",
          response: err.data
        });
      });
  }

  renderLigas = () => {
    if (this.state.ligas.length === 0) {
      return (
        <div className="justify-content-center">
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />
          <Spinner type="grow" color="light" />
          <Spinner type="grow" color="dark" />
        </div>
      );
    } else {
      const listLigas = this.state.ligas.map((item, i) => {
        return (
          <div className="col-4" key={i}>
            <LigasList
              deporte={item.deporte.nombre}
              nombre={item.nombreLiga}
              descripcion={item.descripcion}
              icono= {faFutbol}
            ></LigasList>
          </div>
        );
      });
      return listLigas;
    }
  };

  renderLigassss = () => {
    console.log("fuck");
    console.log(this.state);
    // const listLigas = this.state.ligas.filter((item, i) => {
    //   item.deporte.nombre === "Beisbol"
    //     ? this.setState({ligas: item})
    //     : console.log("fuck");
    // });
    // return listLigas;
  };
  render() {
    return (
      <React.Fragment>
        <div className="container col-lg-10 col-md-8 mt-6" style={standardBg}>
          <h2>Futbol</h2>
          <div className="row">{this.renderLigas()}</div>
        </div>
        <CreateLeagueBtn></CreateLeagueBtn>
      </React.Fragment>
    );
  }
}

export default Futbol;
