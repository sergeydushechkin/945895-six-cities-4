import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import NameSpace from "../../reducer/name-space.js";
import {SignIn} from "./sign-in.jsx";

import offers from "../../mocks/tests_offers.js";

const mockStore = configureStore([]);

it(`Render SignIn`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers
    },
    [NameSpace.APP]: {
      city: offers[0].city.name,
      sortType: `popular`,
      activeOfferId: -1,
      showAuthPage: false,
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
          <SignIn
            onUserLogin={() => {}}
            onChangeActiveOfferId={() => {}}
            onChangeAuthPageState={() => {}}
          />
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
