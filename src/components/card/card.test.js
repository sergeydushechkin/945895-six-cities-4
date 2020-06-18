import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

import offers from "../../mocks/tests_offers.js";

it(`Render Card`, () => {
  const tree = renderer
    .create(
        <Card
          offer={offers[0]}
          onPlaceCardMouseEnter={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
