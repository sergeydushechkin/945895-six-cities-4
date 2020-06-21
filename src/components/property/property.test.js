import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

import offers from "../../mocks/tests_offers.js";
import users from "../../mocks/tests_users.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Property
          offerId = {1}
          offers = {offers}
          users = {users}
          onPlaceCardHeaderClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
