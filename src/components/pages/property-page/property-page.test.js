import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router, Route} from "react-router-dom";

import history from "../../../history.js";
import PropertyPage from "./property-page.jsx";

import testStore from "../../../mocks/tests-mock-store.js";
import offers from "../../../mocks/tests-offers.js";

const mockStore = configureStore([]);

it(`Render PropertyPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Route exact path={`/offer/1`}
              render={() => {
                return <PropertyPage
                  offerId = {1}
                  offers = {offers}
                />;
              }}
            />
          </Router>
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