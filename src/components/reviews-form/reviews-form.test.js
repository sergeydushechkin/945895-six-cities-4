import React from "react";
import renderer from "react-test-renderer";
import ReviewsForm from "./reviews-form.jsx";

it(`Render ReviewsForm`, () => {
  const tree = renderer
    .create(
        <ReviewsForm
          offerId={1}
          onPostComment={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
