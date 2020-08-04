import * as React from "react";
import * as renderer from "react-test-renderer";

import {Comment} from "../../types";
import ReviewsList from "./reviews-list";

const reviews: Array<Comment> = [
  {
    id: 1,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 4.3,
    date: `2019-04-23`,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`,
    }
  },
  {
    id: 2,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 4.3,
    date: `2019-04-24`,
    user: {
      avatarUrl: `img/1.png`,
      id: 5,
      isPro: false,
      name: `Inna`,
    }
  }
];

it(`Render ReviewList`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={reviews}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
