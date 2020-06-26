import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

import offers from "../../mocks/tests_offers.js";
import users from "../../mocks/tests_users.js";

it(`Render ReviewList`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={offers[0].reviews}
          users={users}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
