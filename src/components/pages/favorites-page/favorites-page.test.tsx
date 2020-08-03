import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../../history";
import {FavoritesPage} from "./favorites-page";

import testStore from "../../../mocks/tests-mock-store";
import offers from "../../../mocks/tests-offers";

const mockStore = configureStore([]);

it(`Render FavoritesPage`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <FavoritesPage
              favoritesOffers={offers}
            />
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
