import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import {AuthInfo} from "../../types";
import history from "../../history";
import {Navigation} from "./navigation";

const authInfo: AuthInfo = {
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
            authInfo={authInfo}
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
            authInfo={authInfo}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
