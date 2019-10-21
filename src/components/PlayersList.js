import React, { Component } from "react";
import { Table } from "reactstrap";
import { isTerminatorless } from "@babel/types";

class PlayersList extends Component {
  state = {
    player: this.props.players
  };
  renderPlayerRows = () => {
    const eachPlayer = this.state.player.map((item, i) => {
      return (
        <tr>
          <td>{item.numero}</td>
          <td>{item.nombre}</td>
          <td>{item.apellido}</td>
          <td>{item.posicion}</td>
        </tr>
      );
    });
    return eachPlayer;
  };
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Posicion</th>
          </tr>
        </thead>
        <tbody>{this.renderPlayerRows()}</tbody>
      </Table>
    );
  }
}

export default PlayersList;
