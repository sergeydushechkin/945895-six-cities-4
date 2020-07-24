import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../../history.js";

import MainPage from "./main-page.jsx";

import testStore from "../../../mocks/tests-mock-store.js";
import offers from "../../../mocks/tests-offers.js";


const mockStore = configureStore([]);

it(`Render MainPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MainPage
              activeOffers = {offers}
              onChangeActiveOfferId = {() => {}}
              sortType = {`popular`}
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
