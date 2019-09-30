import React, { Component } from 'react';

class Teams extends Component {
    state = {  

    }
    render() { 
        return ( 
            <React.Fragment>
            <div
            className="container col-md-10 mt-10"
            style={{
              boxShadow: "8px 8px 10px gray",
              background:
                "linear-gradient(90deg, rgba(49,56,255,1) 0%, rgba(42,241,185,0.8) 100%)",
              border: "1px solid gray",
              padding: "30px 50px",
              margin: "30px auto"
            }}
          >
            <h2>Teams</h2>
          </div>
            </React.Fragment>
         );
    }
}
 
export default Teams;