import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import history from "../../history.js";
import {Navigation} from "./navigation.jsx";

const AuthInfo = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

it(`Render Navigation AUTH`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Navigation
            authStatus={`AUTH`}
            authInfo={AuthInfo}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Navigation NO AUTH`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Navigation
            authStatus={`NO_AUTH`}
            authInfo={AuthInfo}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
