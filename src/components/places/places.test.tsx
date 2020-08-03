import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import {noop} from "../../utils";
import history from "../../history";
import Places from "./places";

import testStore from "../../mocks/tests-mock-store";
import offers from "../../mocks/tests-offers";

const mockStore = configureStore([]);

it(`Render Places`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <Places
              activeOffers={offers}
              onActiveItemChange={noop}
              activeItemId={1}
              city={`Paris`}
              sortedActiveOffers={offers}
            />
          </Provider>
        </Router>,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
