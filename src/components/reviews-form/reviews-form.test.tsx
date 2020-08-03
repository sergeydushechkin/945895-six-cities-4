import * as React from "react";
import * as renderer from "react-test-renderer";

import {noop} from "../../utils";
import ReviewsForm from "./reviews-form";

it(`Render ReviewsForm`, () => {
  const tree = renderer
    .create(
        <ReviewsForm
          offerId={1}
          onPostComment={noop}
          resetFromState={noop}
          disableForm={noop}
          enableForm={noop}
          changeElementState={noop}
          formStates={{
            rating: ``,
            review: ``,
            isFormDisabled: false,
            errorText: ``,
          }}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
