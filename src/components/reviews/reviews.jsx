import React from "react";
import PropTypes from "prop-types";

import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";

const Reviews = (props) => {
  const {reviews, isUserLoggedIn} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList
        reviews={reviews}
      />
      {isUserLoggedIn &&
        <ReviewsForm />
      }
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array.isRequired,
  isUserLoggedIn: PropTypes.bool.isRequired,
};

export default Reviews;
