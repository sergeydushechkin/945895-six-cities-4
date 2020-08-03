import * as React from "react";
import * as renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";

import {noop} from "../../../utils";
import history from "../../../history";

import {SignInPage} from "./sign-in-page";

import testStore from "../../../mocks/tests-mock-store";

const mockStore = configureStore([]);

it(`Render SignInPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <SignInPage
              onUserLogin={noop}
              loadFavorite={noop}
              onActiveItemChange={noop}
              activeItemId={1}
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
