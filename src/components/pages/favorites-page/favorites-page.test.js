import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../../history.js";
import {FavoritesPage} from "./favorites-page.jsx";

import testStore from "../../../mocks/tests-mock-store.js";
import offers from "../../../mocks/tests-offers";

const mockStore = configureStore([]);

it(`Render FavoritesPage`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <FavoritesPage
              favoritesLocations={[offers[0].city.name, offers[1].city.name]}
              favoritesOffers={offers}
              loadFavorite={() => {}}
            />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
