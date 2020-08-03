import * as React from "react";
import * as renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";

import history from "../../history";
import {noop} from "../../utils";
import {CardType} from "../../types";
import CardsList from "./cards-list";

import testStore from "../../mocks/tests-mock-store";
import offers from "../../mocks/tests-offers";

const mockStore = configureStore([]);

it(`Render CardsList`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <CardsList
              offers={offers}
              onActiveItemChange={noop}
              cardType={CardType.MAIN}
            />
          </Provider>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

