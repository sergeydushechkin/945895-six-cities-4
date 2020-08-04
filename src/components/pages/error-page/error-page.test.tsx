import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../../history";
import {ErrorPage} from "./error-page";

import testStore from "../../../mocks/tests-mock-store";

const mockStore = configureStore([]);

it(`Render ErrorPage`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <ErrorPage errorText={`Test error`}/>
          </Router>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
