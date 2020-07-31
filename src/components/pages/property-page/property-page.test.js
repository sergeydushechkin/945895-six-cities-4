import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../../history.js";
import {PropertyPage} from "./property-page.jsx";

import testStore from "../../../mocks/tests-mock-store.js";
import offers from "../../../mocks/tests-offers.js";

const mockStore = configureStore([]);

it(`Render PropertyPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <PropertyPage
              match={{params: {id: `1`}}}
              offer={offers[0]}
              reviews={[]}
              nearby={offers}
              authStatus={`AUTH`}
              loadComments={() => {}}
              loadNearby={() => {}}
              postComment={() => {}}
              onFavoritesToggle={() => {}}
            />
          </Router>
        </Provider>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          },
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
