import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewsForm from "./reviews-form.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Test ReviewsForm component items clicks and return value`, () => {
  const onPostComment = jest.fn().mockImplementation(() => Promise.resolve(`value`));

  const reviewsForm = shallow(
      <ReviewsForm
        offerId={1}
        onPostComment={onPostComment}
      />
  );

  const headerNavItem = reviewsForm.find(`.reviews__form`);

  headerNavItem.simulate(`submit`, {
    preventDefault: () => {}
  });

  expect(onPostComment).toHaveBeenCalledTimes(1);
});
