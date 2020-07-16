import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import Property from "./property.jsx";

import offers from "../../mocks/tests_offers.js";

const mockStore = configureStore([]);

it(`Render Property`, () => {
  const store = mockStore({
    offers,
    city: offers[0].city.name,
    locations: Array.from(new Set(offers.map((it) => it.city.name))),
    sortType: `popular`,
    activeOfferId: null
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
