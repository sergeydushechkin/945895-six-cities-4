import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import FavoritesLocations from "./favorites-locations.jsx";

import testStore from "../../mocks/tests-mock-store.js";
import offers from "../../mocks/tests-offers";

const mockStore = configureStore([]);

it(`Render FavoritesLocations`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <FavoritesLocations
            location={offers[0].city.name}
            offers={offers}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
