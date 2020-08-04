import * as React from "react";
import * as renderer from "react-test-renderer";

import {Comment} from "../../types";
import {noop} from "../../utils";
import Reviews from "./reviews";

const reviews: Array<Comment> = [
  {
    id: 1,
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: 4.3,
    date: `2019-04-24`,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`,
    }
  }
];

it(`Render Reviews`, () => {
  const tree = renderer
    .create(
        <Reviews
          reviews={reviews}
          isUserLoggedIn={true}
          offerId={1}
          onPostComment={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
