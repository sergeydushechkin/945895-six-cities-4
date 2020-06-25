import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";

const ReviewsList = (props) => {
  const {reviews, users} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) => {
        const user = users.find((it) => review.userId === it.id);

        return (
          <Review
            key={review.id}
            review={review}
            user={user}
          />
        );
      })}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
};

export default ReviewsList;
