import * as React from "react";

const RATING_STARS_TEMPLATE = [5, 4, 3, 2, 1];
const FIRST_START_NUM = 1;

const ratingToTitle = {
  5: `perfect`,
  4: `good`,
  3: `not bad`,
  2: `badly`,
  1: `terribly`,
};

interface Props {
  onRatingChange: (evt: React.ChangeEvent) => void;
  isFormDisabled: boolean;
  rating: string;
}

const ReviewsRating: React.FunctionComponent<Props> = (props: Props) => {
  const {onRatingChange, isFormDisabled, rating} = props;

  return (
    <div className="reviews__rating-form form__rating" >
      {
        RATING_STARS_TEMPLATE.map((num) => {
          const id = num === FIRST_START_NUM ? `${num}-star` : `${num}-stars`;
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

export default ReviewsRating;
