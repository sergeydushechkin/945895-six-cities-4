import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

import offers from "../../mocks/tests_offers.js";

it(`Render Card`, () => {
  const tree = renderer
    .create(
        <Card
          key={offers[0].id}
          offer={offers[0]}
          isNearPlaces={false}
          onPlaceCardMouseEnter={() => {}}
          onPlaceCardHeaderClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
