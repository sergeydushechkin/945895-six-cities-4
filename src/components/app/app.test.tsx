import * as React from "react";
import * as renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import testStore from "../../mocks/tests-mock-store";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <App />
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
