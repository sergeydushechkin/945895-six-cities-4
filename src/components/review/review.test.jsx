import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

import users from "../../mocks/tests_users.js";

const review = {
  id: 1,
  userId: 2,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  rating: 4.3,
  date: `2019-04-24`
};

it(`Render Review`, () => {
  const tree = renderer
    .create(
        <Review
          key={review.id}
          review={review}
          user={users[0]}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
