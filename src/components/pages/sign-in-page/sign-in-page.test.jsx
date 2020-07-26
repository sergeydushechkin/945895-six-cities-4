import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";

import history from "../../../history.js";

import {SignInPage} from "./sign-in-page.jsx";

import testStore from "../../../mocks/tests-mock-store.js";

const mockStore = configureStore([]);

it(`Render SignInPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <SignInPage
              onUserLogin={() => {}}
              onChangeAuthPageState={() => {}}
            />
          </Router>
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
