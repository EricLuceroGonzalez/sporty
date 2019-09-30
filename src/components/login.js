import React, { Component } from 'react';

const standardBg = {
    boxShadow: "8px 8px 8px gray",
    background:
      "linear-gradient(90deg, rgba(249,56,155,1) 0%, rgba(42,241,185,0.8) 100%)",
    border: "1px solid gray",
    padding: "70px 50px",
    margin: "30px auto"
  };
class LogIn extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div className="container col-md-8 mt-6" style={standardBg}>
            <h2>Login</h2>
          </div>
            </React.Fragment>
         );
    }
}
 
export default LogIn;