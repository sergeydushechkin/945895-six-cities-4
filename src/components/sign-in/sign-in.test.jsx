import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";

import history from "../../history.js";
import NameSpace from "../../reducer/name-space.js";
import {SignIn} from "./sign-in.jsx";

import offers from "../../mocks/tests_offers.js";

const mockStore = configureStore([]);

it(`Render SignIn`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers,
      city: offers[0].city.name,
      activeOfferId: -1,
      comments: [],
    },
    [NameSpace.APP]: {
      sortType: `popular`,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authInfo: {
        avatarUrl: ``,
        email: ``,
        id: null,
        isPro: null,
        name: ``,
      }
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <SignIn
              onUserLogin={() => {}}
              onChangeActiveOfferId={() => {}}
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
