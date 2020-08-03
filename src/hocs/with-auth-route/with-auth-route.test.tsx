import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../history.js";

import NameSpace from "../../reducer/name-space.js";
import withAuthRoute from "./with-auth-route.js";

const mockStore = configureStore([]);

const MockComponent = () => <div />;
const MockComponentWrapped = withAuthRoute(MockComponent, `/login`);

it(`Render withAuthRoute wrapped component renders correct`, () => {
  const store = mockStore({[NameSpace.USER]: {authorizationStatus: `AUTH`}});
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <MockComponentWrapped />
          </Provider>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
