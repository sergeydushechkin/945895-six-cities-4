import React from "react";
import PropTypes from "prop-types";

import ReviewsRating from "../reviews-rating/reviews-rating.jsx";

class ReviewsForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      review: ``,
      isFormDisabled: false,
      errorText: ``,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  _resetFromState() {
    this.setState({
      rating: ``,
      review: ``,
      errorText: ``,
    });
  }

  _disableForm() {
    this.setState({isFormDisabled: true});
  }

  _enableForm() {
    this.setState({isFormDisabled: false});
  }

  handleChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const {offerId, onPostComment} = this.props;
    this._disableForm();

    onPostComment(offerId, {comment: this.state.review, rating: this.state.rating})
      .then(() => {
        this._resetFromState();
        this._enableForm();
      })
      .catch((result) => {
        this.setState({errorText: `${result}; text: ${result.response.data.error}`});
        this._enableForm();
      });
  }

  render() {
    const {rating, review, isFormDisabled, errorText} = this.state;
    const isSubmitDisabled = !(rating && (review.length >= 50 && review.length <= 300));

    return (
      <form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <ReviewsRating
          onRatingChange={this.handleChange}
          isFormDisabled={isFormDisabled}
          rating={rating}
        />
        <textarea disabled={isFormDisabled} value={this.state.review} onChange={this.handleChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
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

ReviewsForm.propTypes = {
  onPostComment: PropTypes.func.isRequired,
  offerId: PropTypes.any.isRequired,
};

export default ReviewsForm;
