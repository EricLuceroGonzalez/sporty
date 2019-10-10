import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const titleCard = {
  fontSize: "2em",
  fontWeight: "bolder"
};

class LigasList extends Component {
  state = {
    deporte: this.props.deporte,
    nombre: this.props.nombre,
    descripcion: this.props.descripcion,
    favIcon: this.props.icono
  };
  render() {
    return (
      <Card
        style={{
          margin: "12px auto",
          boxShadow: "4px 3px 6px black",
          backgroundColor: "rgba(12,242,142,1)"
        }}
      >
        <CardHeader>
          <div className="row" style={{padding: '0px 20px'}}>
            <div className="mr-auto">{this.state.deporte}</div>
            <div>
              <FontAwesomeIcon icon={this.state.favIcon}></FontAwesomeIcon>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <CardTitle style={titleCard}>{this.state.nombre}</CardTitle>
          <CardSubtitle>Descripcion...: {this.state.descripcion}</CardSubtitle>
          <CardSubtitle style={{ color: "red" }}>
            {" "}
            {this.state.nombre}
          </CardSubtitle>
          <CardText>
            Text text text text text text text text text text text text text
            text
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default LigasList;
