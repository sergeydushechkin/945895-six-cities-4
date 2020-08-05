import * as React from "react";

import ReviewsRating from "../reviews-rating/reviews-rating";

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

interface Props {
  onPostComment: (id: number, commentData: {comment: string, rating: string}) => Promise<void>;
  offerId: number;
  resetFromState: () => void;
  disableForm: () => void;
  enableForm: () => void;
  changeElementState: (name: string, value: string) => void;
  formStates: {
    rating: string,
    review: string,
    isFormDisabled: boolean,
    errorText: string,
  };
}

class ReviewsForm extends React.PureComponent<Props, null> {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const {changeElementState} = this.props;
    const {name, value} = evt.target;
    changeElementState(name, value);
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const {offerId, onPostComment, resetFromState, disableForm, enableForm, changeElementState, formStates} = this.props;
    const {review, rating} = formStates;
    disableForm();

    onPostComment(offerId, {comment: review, rating})
      .then(() => {
        resetFromState();
        enableForm();
      })
      .catch((result) => {
        changeElementState(`errorText`, `${result}; text: ${result.response.data.error}`);
        enableForm();
      });
  }

  render() {
    const {formStates} = this.props;
    const {rating, review, isFormDisabled, errorText} = formStates;
    const isSubmitDisabled = !(rating && (review.length >= MIN_COMMENT_LENGTH && review.length <= MAX_COMMENT_LENGTH));

    return (
      <form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <ReviewsRating
          onRatingChange={this.handleChange}
          isFormDisabled={isFormDisabled}
          rating={rating}
        />
        <textarea disabled={isFormDisabled} value={review} onChange={this.handleChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Submit</button>
        </div>
        {errorText &&
          <div style={{marginTop: `15px`, fontSize: `15px`, fontWeight: `bold`, color: `#ff0000`}}>{errorText}</div>
        }
      </form>
    );
  }
}

export default ReviewsForm;
