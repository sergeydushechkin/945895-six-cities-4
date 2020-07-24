import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../../history.js";
import NameSpace from "../../../reducer/name-space.js";
import PropertyPage from "./property-page.jsx";

import offers from "../../../mocks/tests_offers.js";

const mockStore = configureStore([]);

it(`Render PropertyPage`, () => {
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
          <Router history={history}>
            <PropertyPage
              offerId = {1}
              offers = {offers}
              onPlaceCardHeaderClick = {() => {}}
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
