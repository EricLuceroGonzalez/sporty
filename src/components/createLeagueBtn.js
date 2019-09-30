import React, { Component } from "react";
import {  faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const floatStyle = {
  fontSize: "3em",
  backgroundColor: "rgba(1,1,1,1)",
  color: "#FFF",
  position: "fixed",
  width:'60px',
  height:'60px',
  right: "18px",
  bottom: "14px",
  boxShadow: "2px 2px 3px #999",
  borderRadius: "50%",
  zIndex: '1000',
  cursor: 'pointer'
};
class CreateLeagueBtn extends Component {
  state = {
    sports: this.props.sports
  };

  render() {
    return (
      <React.Fragment>
      <Link to='/Create'>
              <FontAwesomeIcon style={floatStyle} icon={faPlus}></FontAwesomeIcon>
              </Link>
      </React.Fragment>
    );
  }
}

export default CreateLeagueBtn;
