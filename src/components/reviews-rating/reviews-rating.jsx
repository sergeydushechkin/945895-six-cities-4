import React from "react";
import PropTypes from "prop-types";

const RATING_STARS_TEMPLATE = [5, 4, 3, 2, 1];

const ratingToTitle = {
  5: `perfect`,
  4: `good`,
  3: `not bad`,
  2: `badly`,
  1: `terribly`,
};

const ReviewsRating = (props) => {
  const {onRatingChange, isFormDisabled, rating} = props;

  return (
    <div className="reviews__rating-form form__rating" >
      {
        RATING_STARS_TEMPLATE.map((num) => {
          const id = num === 1 ? `${num}-star` : `${num}-stars`;
          return (
            <React.Fragment key={num}>
              <input onChange={onRatingChange} disabled={isFormDisabled} checked={rating === String(num)} className="form__rating-input visually-hidden" name="rating" value={num} id={id} type="radio"/>
              <label htmlFor={id} className="reviews__rating-label form__rating-label" title={ratingToTitle[num]}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        })
      }
    </div>
  );
};

ReviewsRating.propTypes = {
  onRatingChange: PropTypes.func.isRequired,
  isFormDisabled: PropTypes.bool.isRequired,
  rating: PropTypes.string.isRequired,
};

export default ReviewsRating;
