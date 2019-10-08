import React, { Component } from "react";
// import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import CreateLeagueBtn from "../createLeagueBtn";
import api from "../../api/index";
import { thisExpression } from "@babel/types";

const standardBg = {
  boxShadow: "8px 8px 8px gray",
  background:
    "linear-gradient(90deg, rgba(249,56,155,1) 0%, rgba(42,241,185,0.8) 100%)",
  border: "1px solid gray",
  padding: "70px 50px",
  margin: "30px auto"
};
// const titleCard = {
//   fontSize: "2em",
//   fontWeight: "bolder"
// };
class Futbol extends Component {
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
          item.deporte.nombre === "Beisbol"
            ? this.setState(prevState => ({
              ligas: [...prevState.ligas, item]
            }))
            : console.log("fuck");
        });
       
        // this.setState({
        //   ligas: res.data
        // });
      })
      .catch(err => {
        console.log({
          mensaje: "Get Fallido",
          response: err.data
        });
      });
  }

  // renderLigas = () => {
  //   const claca = this.state.ligas[19];
  //   console.log(claca);
  //   // console.log(claca.deporte.nombre);

  //   const listLigas = this.state.ligas.map((item, i) => {
  //     return (
  //       <div className="col-4" key={i}>
  //         <Card
  //           style={{
  //             margin: "12px auto",
  //             boxShadow: "4px 3px 6px black",
  //             backgroundColor: "rgba(12,242,142,1)"
  //           }}
  //         >
  //           <CardBody>
  //             <CardTitle style={titleCard}>{item.nombreLiga}</CardTitle>
  //             <CardSubtitle>Descripcion: {item.descripcion}</CardSubtitle>
  //             <CardSubtitle style={{ color: "red" }}>
  //               {" "}
  //               {item.deporte.nombre}
  //             </CardSubtitle>
  //             <CardText>
  //               Text text text text text text text text text text text text text
  //               text
  //             </CardText>
  //           </CardBody>
  //         </Card>
  //       </div>
  //     );
  //   });
  //   return listLigas;
  // };

  renderLigas = () => {
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
