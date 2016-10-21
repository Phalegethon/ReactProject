import React, { Component, PropTypes } from "react";

import Header from "./shared/Header";
import Footer from "./shared/Footer";
import LoginForm from "./login/LoginPage";

class Main extends Component {
  constructor(prop) {
    super(prop);
  }

  render() {

    return (
      <div id="wrapper">
        <Header />
        <LoginForm />
        {/*<main id="main">
          {this.props.children}
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
              </div>
            </div>
          </div>
        </main>*/}
        <Footer />
      </div>/*"wrapper"*/
    );

  }
}

export default Main;
