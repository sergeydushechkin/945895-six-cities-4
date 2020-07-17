import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import Main from "./main.jsx";

import offers from "../../mocks/tests_offers.js";


const mockStore = configureStore([]);

it(`Render Main`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      offers,
      city: offers[0].city.name,
    },
    [NameSpace.APP]: {
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
          <Main
            activeOffers = {offers}
            onPlaceCardHeaderClick = {() => {}}
            activeItemId = {-1}
            onActiveItemChange={() => {}}
            sortType = {`popular`}
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
