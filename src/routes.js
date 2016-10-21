import React from "react";
import { Route, IndexRoute } from "react-router";
import _ from "lodash";

import Main from "./components/Main";
import routesCollection from "./routesCollection";

const mappedRoutes = _.map(routesCollection, (item, index) => {
  return (
    item.home ?
      <IndexRoute key={index} component={item.component} /> :
      <Route key={index} path={item.url} component={item.component} />
  );
});


export default (
  <Route path="/" component={Main}>
    {mappedRoutes}
  </Route>
);
