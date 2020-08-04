import * as React from "react";

import {Comment} from "../../types";
import ReviewsList from "../reviews-list/reviews-list";
import ReviewsForm from "../reviews-form/reviews-form";
import withFormState from "../../hocs/with-form-states/with-form-states";

const ReviewsFormWrapped = withFormState(ReviewsForm);

interface Props {
  reviews: Array<Comment>;
  isUserLoggedIn: boolean;
  onPostComment: (id: number, {}) => Promise<void>;
  offerId: number;
}

const Reviews: React.FunctionComponent<Props> = (props: Props) => {
  const {reviews, isUserLoggedIn, offerId, onPostComment} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList
        reviews={reviews}
      />
      {isUserLoggedIn &&
        <ReviewsFormWrapped
          offerId={offerId}
          onPostComment={onPostComment}
        />
      }
    </section>
  );
};

export default Reviews;
