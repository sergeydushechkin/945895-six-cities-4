import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";

import offers from "../../mocks/tests_offers.js";

it(`Render CardsList`, () => {
  const tree = renderer
    .create(
        <CardsList
          offers={offers}
          onPlaceCardHeaderClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

