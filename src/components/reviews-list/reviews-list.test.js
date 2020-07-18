import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

import users from "../../mocks/tests_users.js";

const reviews = [
  {
    id: 1,
    userId: 2,
    text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 4.3,
    date: `2019-04-24`
  },
  {
    id: 2,
    userId: 3,
    text: `Very good`,
    rating: 3.2,
    date: `2019-04-25`
  }
];

it(`Render ReviewList`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviews}
          users={users}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
