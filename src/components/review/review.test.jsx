import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

import offers from "../../mocks/tests_offers.js";
import users from "../../mocks/tests_users.js";

it(`Render Review`, () => {
  const tree = renderer
    .create(
        <Review
          key={offers[0].reviews[0].id}
          review={offers[0].reviews[0]}
          user={users[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
