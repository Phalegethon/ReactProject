import React, { Component } from "react";
import Helmet from "react-helmet";

class HomePage extends Component {

  render() {

    return (
      <div id="home" className="page">
        <Helmet title="Home - myKredit Mock Service" />
        <div className="container">
          <div className="jumbotron text-center">
            <h1><b>myKredit</b></h1>
            <h2>Mock Service</h2>
          </div>
        </div>
      </div>
    );

  }
}

export default HomePage;
