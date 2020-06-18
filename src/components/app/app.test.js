import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

import offers from "../../mocks/tests_offers.js";

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          rentsCount = {312}
          offers = {offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
