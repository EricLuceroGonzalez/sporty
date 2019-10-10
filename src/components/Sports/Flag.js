import React, { Component } from "react";
import CreateLeagueBtn from "../createLeagueBtn";
import api from "../../api/index";
import { Spinner } from "reactstrap";
import LigasList from "../LigasList";
import { faFootballBall } from "@fortawesome/free-solid-svg-icons";

const standardBg = {
  boxShadow: "8px 8px 8px gray",
  background:
    "linear-gradient(90deg, rgba(249,56,155,1) 0%, rgba(42,241,185,0.8) 100%)",
  border: "1px solid gray",
  padding: "70px 50px",
  margin: "30px auto"
};

class FlagFootball extends Component {
  state = {
    ligas: []
  };

  componentDidMount() {
    api
      .getLigas()
      .then(res => {
        console.log({
          mensaje: "Get exitoso (Flag)",
          response: res.data
        });
        res.data.filter((item, i) => {
          console.log(`item 0: ${item.deporte._id}`);
          console.log(`item: ${item.deporte.nombre}`);
          item.deporte.nombre === "FlagFootball"
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
      console.log(this.state);

      const listLigas = this.state.ligas.map((item, i) => {
        console.log(item);
        return (
          <div className="col-4" key={i}>
            <LigasList
              deporte={item.deporte.nombre}
              nombre={item.nombreLiga}
              descripcion={item.descripcion}
              icono={faFootballBall}
            ></LigasList>
          </div>
        );
      });
      return listLigas;
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container col-lg-10 col-md-8 mt-6" style={standardBg}>
          <h2>FlagFootball</h2>
          <div className="row">{this.renderLigas()}</div>
        </div>
        <CreateLeagueBtn></CreateLeagueBtn>
      </React.Fragment>
    );
  }
}

export default FlagFootball;
