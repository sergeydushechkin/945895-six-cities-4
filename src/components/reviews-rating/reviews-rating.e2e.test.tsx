import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import ReviewsRating from "./reviews-rating";

configure({
  adapter: new Adapter(),
});

it(`Should ReviewsRating item can  be pressed and checked proper value`, () => {
  const onRatingChange = jest.fn().mockImplementation();

  const reviewsRating = shallow(
      <ReviewsRating
        onRatingChange={onRatingChange}
        isFormDisabled={false}
        rating={`5`}
      />
  );

  const ratingInput = reviewsRating.find(`.form__rating-input`).at(0);

  ratingInput.simulate(`change`);

  expect(onRatingChange).toHaveBeenCalledTimes(1);
  expect(ratingInput.prop(`checked`)).toEqual(true);
});
