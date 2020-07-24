import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import Places from "./places.jsx";

import testStore from "../../mocks/tests-mock-store.js";
import offers from "../../mocks/tests-offers.js";

const mockStore = configureStore([]);

it(`Render Places`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Places
            activeOffers={offers}
            onPlaceCardHeaderClick={() => {}}
            onActiveItemChange={() => {}}
            activeItemId={1}
            city={`Paris`}
            sortType={`popular`}
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
