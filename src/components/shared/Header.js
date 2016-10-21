import React from "react";
import { Link } from "react-router/umd/ReactRouter";
import _ from "lodash";

import routesCollection from "./../../routesCollection";


const Header = (props) => {


  const navRoutes = _.filter(routesCollection, {
    nav: true
  });

  const routesMarkup = _.map(navRoutes, (item, index) => {
    return (
      <li key={index}>
        <Link activeClassName="active" to={item.url}>{item.title}</Link>
      </li>
    );
  });


  return (
    <div className="header">
      <div className="navbar navbar-default" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              LOGO...
            </Link>
          </div>
          <div className="navbar-right">
            <ul className="nav navbar-nav">
              {routesMarkup}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

};



export default Header;
