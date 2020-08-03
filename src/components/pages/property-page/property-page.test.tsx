import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import {noop} from "../../../utils";
import history from "../../../history";
import {PropertyPage} from "./property-page";

import testStore from "../../../mocks/tests-mock-store";
import offers from "../../../mocks/tests-offers";

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
              loadComments={noop}
              loadNearby={noop}
              postComment={noop}
              onFavoritesToggle={noop}
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
