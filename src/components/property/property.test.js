import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

import offers from "../../mocks/tests_offers.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Property

        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
