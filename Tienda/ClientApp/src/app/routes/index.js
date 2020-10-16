import React from "react";
import { Route, Switch } from "react-router-dom";
import eCommerce from "./eCommerce";
import asyncComponent from "../../util/asyncComponent";
import { withRouter } from "react-router";

const Routes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/ecommerce`} component={eCommerce} />
    <Route
      component={asyncComponent(() =>
        import("app/routes/extraPages/routes/404")
      )}
    />
  </Switch>
);

export default withRouter(Routes);
