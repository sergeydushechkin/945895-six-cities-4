import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";

import offers from "../../mocks/tests_offers.js";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      city: offers[0].city.name,
      offers,
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
          <App />
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
