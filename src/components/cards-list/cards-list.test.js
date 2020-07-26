import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import {CardType} from "../../const.js";
import CardsList from "./cards-list.jsx";

import testStore from "../../mocks/tests-mock-store.js";
import offers from "../../mocks/tests-offers.js";

const mockStore = configureStore([]);

it(`Render CardsList`, () => {
  const store = mockStore(testStore);

  const tree = renderer
    .create(
        <Provider store={store}>
          <CardsList
            offers={offers}
            onActiveItemChange={() => {}}
            cardType={CardType.MAIN}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

