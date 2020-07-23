import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import CardsList from "./cards-list.jsx";

import offers from "../../mocks/tests_offers.js";

const mockStore = configureStore([]);

it(`Render CardsList`, () => {
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
          <CardsList
            offers={offers}
            onPlaceCardHeaderClick={() => {}}
            onActiveItemChange={() => {}}
            onFavoritesToggle={() => {}}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

