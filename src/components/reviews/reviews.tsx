import React from "react";
import PropTypes from "prop-types";

import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";
import withFormState from "../../hocs/with-form-states/with-form-states.js";

const ReviewsFormWrapped = withFormState(ReviewsForm);

const Reviews = (props) => {
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

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
  onPostComment: PropTypes.func.isRequired,
  offerId: PropTypes.any.isRequired,
};

export default Reviews;
