import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import NameSpace from "../../reducer/name-space.js";
import Property from "./property.jsx";

import offers from "../../mocks/tests_offers.js";

const mockStore = configureStore([]);

it(`Render Property`, () => {
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
          <Property
            offerId = {1}
            offers = {offers}
            onPlaceCardHeaderClick = {() => {}}
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
