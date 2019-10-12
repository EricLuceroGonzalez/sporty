import React, { Component } from "react";
import CreateLeagueBtn from "../createLeagueBtn";
import api from "../../api/index";
import { Spinner } from "reactstrap";
import LigasList from "../LigasList";
import { faBaseballBall } from "@fortawesome/free-solid-svg-icons";

const standardBg = {
  background: 'rgb(27,96,242)',
  background: 'linear-gradient(90deg, rgba(27,96,242,1) 0%, rgba(145,200,255,0.5) 100%)',
  border: "1px solid gray",
  padding: "70px 50px",
  margin: "30px auto"
};

class Beisbol extends Component {
  state = {
    ligas: []
  };

  componentDidMount() {
    api
      .getLigas()
      .then(res => {
        console.log({
          mensaje: "Get exitoso",
          response: res.data
        });

        res.data.filter((item, i) => {
          console.log(item.nombreLiga);

          item.deporte.nombre === "Beisbol"
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
    }

    const listLigas = this.state.ligas.map((item, i) => {
      return (
          <LigasList
          key={i}
            deporte={item.deporte.nombre}
            nombre={item.nombreLiga}
            descripcion={item.descripcion}
            icono={faBaseballBall}
          ></LigasList>
      );
    });
    return listLigas;
  };
  render() {
    return (
      <React.Fragment>
      <div className="container col-lg-10 col-md-10 col-sm-10 col-xs-12 mt-6" style={standardBg}>
          <h2>Beisbol</h2>
          <div className="row">{this.renderLigas()}</div>
        </div>
        <CreateLeagueBtn></CreateLeagueBtn>
      </React.Fragment>
    );
  }
}

export default Beisbol;
