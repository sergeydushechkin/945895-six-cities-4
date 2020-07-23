import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import Places from "./places.jsx";

import offers from "../../mocks/tests_offers.js";

const mockStore = configureStore([]);

it(`Render Places`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      sortType: `popular`,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Places
            activeOffers={offers}
            onPlaceCardHeaderClick={() => {}}
            onActiveItemChange={() => {}}
            onFavoritesToggle={() => {}}
            activeItemId={1}
            city={`Paris`}
            sortType={`popular`}
          />
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
