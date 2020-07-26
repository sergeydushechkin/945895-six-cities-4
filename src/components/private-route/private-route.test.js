import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user.js";
import {AppRoute} from "../../const.js";
import history from "../../history.js";
import {PrivateRoute} from "./private-route.jsx";

it(`PrivateRoute render correct`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <PrivateRoute
            exact
            path={AppRoute.FAVORITES}
            authStatus={AuthorizationStatus.AUTH}
            render={() => {
              return (<h1>Hello, World!</h1>);
            }}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
