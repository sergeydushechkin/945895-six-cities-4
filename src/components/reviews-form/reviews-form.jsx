import React, {createRef} from "react";
// import PropTypes from "prop-types";

const debugFunc = (() => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const result = Math.random() > 0.5;
      if (result) {
        resolve(result);
      } else {
        reject(result);
      }
    }, 1000);
  });
});

class ReviewsForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: ``,
      text: ``,
      isSubmitDisabled: true,
      isFormDisabled: false,
      errorText: ``,
    };

    this.formRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  _resetFromState() {
    this.formRef.current.reset();

    this.setState({
      rating: ``,
      text: ``,
      isSubmitDisabled: true,
      isFormDisabled: false,
      errorText: ``,
    });
  }

  handleChange(evt) {
    const value = evt.target.value;
    let {text, rating} = this.state;

    switch (evt.target.name) {
      case `rating`:
        this.setState({rating: value});
        rating = value;
        break;
      case `review`:
        this.setState({text: value});
        text = value;
    }

    console.log(text, rating);

    this.setState({isSubmitDisabled: !(rating && (text.length >= 50 && text.length <= 300))});
  }

  handleSubmit(evt) {
    const func = debugFunc();

    evt.preventDefault();
    this.setState({isFormDisabled: true, isSubmitDisabled: true});

    func
      .then(() => {
        this._resetFromState();
      })
      .catch((result) => {
        this.setState({isFormDisabled: false, isSubmitDisabled: false, errorText: `Error: ${result}`});
      });
  }

  render() {
    const {isSubmitDisabled, isFormDisabled, errorText} = this.state;

    return (
      <form onSubmit={this.handleSubmit} ref={this.formRef} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div onChange={this.handleChange} className="reviews__rating-form form__rating" >
          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input disabled={isFormDisabled} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea disabled={isFormDisabled} value={this.state.text} onChange={this.handleChange} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
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
