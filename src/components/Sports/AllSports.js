import React, { Component } from "react";
// import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import CreateLeagueBtn from "../createLeagueBtn";
import api from "../../api/index";
import { Spinner } from "reactstrap";
import LigasList from "../LigasList";
import {
  faFutbol,
  faBatteryEmpty,
  faSwimmer,
  faFootballBall,
  faBasketballBall,
  faBaseballBall,
  faVolleyballBall,
  faDotCircle
} from "@fortawesome/free-solid-svg-icons";

const standardBg = {
  boxShadow: "8px 8px 8px gray",
  background:
    "linear-gradient(90deg, rgba(249,56,155,1) 0%, rgba(42,241,185,0.8) 100%)",
  border: "1px solid gray",
  padding: "70px 50px",
  margin: "30px auto"
};

class AllSports extends Component {
  state = {
    ligas: []
  };

  componentDidMount() {
    api
      .getLigas()
      .then(res => {
        console.log({
          mensaje: "Get exitoso - LIGAS!",
          response: res.data
        });
        this.setState({ ligas: res.data.res });
      })
      .catch(err => {
        console.log({
          mensaje: "Get Fallido",
          response: err.data
        });
      });
  }

  renderIcon = item => {
    switch (item) {
      case "Futbol":
        return faFutbol;
      case "Beisbol":
        return faBaseballBall;
      case "Softball":
        return faBaseballBall;
      case "Volleyball":
        return faVolleyballBall;
      case "Futsal":
        return faFutbol;
      case "Baloncesto":
        return faBasketballBall;
      case "FlagFootball":
        return faFootballBall;
      case "Natacion":
        return faSwimmer;
      case "Billar":
        return faDotCircle;
      default:
        return faBatteryEmpty;
    }
  };
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
      console.log(this.state);

      const listLigas = this.state.ligas.map((item, i) => {
        // console.log(item.deporte.nombre);

        return (
          <LigasList
            key={i}
            id={item._id}
            deporte={item.deporte.nombre}
            nombre={item.nombreLiga}
            descripcion={item.descripcion}
            organizador={item.organizador.nombre}
            contacto={item.organizador.telefono}
            icono={this.renderIcon(item.deporte.nombre)}
          ></LigasList>
        );
      });
      return listLigas;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className="container col-lg-10 col-md-10 col-sm-10 col-xs-12 mt-6"
          style={standardBg}
        >
          <h2>AllSports</h2>
          <div className="row">{this.renderLigas()}</div>
        </div>
        <CreateLeagueBtn></CreateLeagueBtn>
      </React.Fragment>
    );
  }
}

export default AllSports;
