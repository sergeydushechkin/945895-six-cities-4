import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import {noop} from "../../utils";
import ReviewsForm from "./reviews-form";

configure({
  adapter: new Adapter(),
});

it(`Test ReviewsForm component items clicks and return value`, () => {
  const onPostComment = jest.fn().mockImplementation(() => Promise.resolve(`value`));

  const reviewsForm = shallow(
      <ReviewsForm
        offerId={1}
        onPostComment={onPostComment}
        resetFromState={noop}
        disableForm={noop}
        enableForm={noop}
        changeElementState={noop}
        formStates={{
          rating: `5`,
          review: `test test test test test test test test test test test test test test test test test test test test test test test test`,
          isFormDisabled: false,
          errorText: ``,
        }}
      />
  );

  const headerNavItem = reviewsForm.find(`.reviews__form`);

  headerNavItem.simulate(`submit`, {
    preventDefault: noop
  });

  expect(onPostComment).toHaveBeenCalledTimes(1);
});
