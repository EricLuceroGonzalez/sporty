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
  fontSize: "1.25em",
  fontWeight: "bolder",
  borderBottom: "2px solid gray"
};

class LigasList extends Component {
  state = {
    deporte: this.props.deporte,
    nombre: this.props.nombre,
    descripcion: this.props.descripcion,
    organizador: this.props.organizador,
    contacto: this.props.contacto,
    favIcon: this.props.icono
  };
  render() {
    return (
      <div
        className="col-xs-6 col-md-4 col-sm-6 col-lg-3"
        style={{ fontSize: "10px" }}
      >
        <Card
          style={{
            margin: "12px auto",
            boxShadow: "4px 3px 6px black",
            backgroundColor: "rgba(212,212,212,1)"
          }}
        >
          <CardHeader>
            <div className="row" style={{ padding: "0px 20px" }}>
              <div className="mr-auto" style={{ fontFamily: "courier" }}>
                {this.state.deporte}
              </div>
              <div>
                <FontAwesomeIcon
                  icon={this.state.favIcon}
                  style={{
                    fontSize: "1.95em",
                    color: "blue"
                  }}
                ></FontAwesomeIcon>
              </div>
            </div>
          </CardHeader>
          <CardBody>
            <CardTitle style={titleCard}>{this.state.nombre}</CardTitle>
            <CardSubtitle>
              <span style={{ fontWeight: "bold" }}>Descripcion: </span>
              {this.state.descripcion}
            </CardSubtitle>
            <CardSubtitle style={{ color: "red" }}>
              <span style={{ fontWeight: "bold" }}>Organizada por: </span>
              {this.state.organizador}
            </CardSubtitle>
            <CardText>
              <span style={{ fontWeight: "bold" }}>Contacto: </span>
              {this.state.contacto}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default LigasList;
