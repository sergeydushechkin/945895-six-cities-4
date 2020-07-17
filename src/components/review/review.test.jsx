import React from "react";
import renderer from "react-test-renderer";
import Review from "./review.jsx";

const review = {
  id: 1,
  text: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  rating: 4.3,
  date: `2019-04-24`,
  user: {
    avatar: `img/1.png`,
    id: 4,
    isPro: false,
    name: `Max`,
  }
};

it(`Render Review`, () => {
  const tree = renderer
    .create(
        <Review
          key={review.id}
          review={review}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
