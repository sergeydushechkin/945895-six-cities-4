import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../history";
import Favorites from "./favorites";

import testStore from "../../mocks/tests-mock-store";
import offers from "../../mocks/tests-offers";

const mockStore = configureStore([]);

it(`Render Favorites`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <Favorites
              favoritesLocations={[offers[0].city.name, offers[1].city.name]}
              favoritesOffers={offers}
            />
          </Provider>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
