import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

import offers from "../../mocks/tests_offers.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Main
          rentsCount={312}
          offers = {offers}
          onPlaceCardHeaderClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
