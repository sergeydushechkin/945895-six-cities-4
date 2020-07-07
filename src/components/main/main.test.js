import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Main from "./main.jsx";

import offers from "../../mocks/tests_offers.js";


const mockStore = configureStore([]);

it(`Render Main`, () => {
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
          <Main
            city={`Amsterdam`}
            activeOffers = {offers}
            onPlaceCardHeaderClick = {() => {}}
            activeItemId = {-1}
            onActiveItemChange={() => {}}
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
