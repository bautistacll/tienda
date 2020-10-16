import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const eCommerce = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/verduras`}
      />
      <Route
        path={`${match.url}/frutas`}
        component={asyncComponent(() => import("./routes/Frutas"))}
      />
      <Route
        path={`${match.url}/verduras`}
        component={asyncComponent(() => import("./routes/Verduras"))}
      />
      <Route
        component={asyncComponent(() =>
          import("app/routes/extraPages/routes/404")
        )}
      />
    </Switch>
  </div>
);

export default eCommerce;
