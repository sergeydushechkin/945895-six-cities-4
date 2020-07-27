import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../history.js";
import Favorites from "./favorites.jsx";

import testStore from "../../mocks/tests-mock-store.js";
import offers from "../../mocks/tests-offers";

const mockStore = configureStore([]);

it(`Render Favorites`, () => {
  const store = mockStore(testStore);
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <Favorites
              locations={[offers[0].city.name, offers[1].city.name]}
              offers={offers}
            />
          </Provider>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
