import * as React from "react";
import * as renderer from "react-test-renderer";

import {noop} from "../../utils";
import ReviewsRating from "./reviews-rating";

it(`Render ReviewsRating`, () => {
  const tree = renderer
    .create(
        <ReviewsRating
          onRatingChange={noop}
          isFormDisabled={false}
          rating={`5`}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
