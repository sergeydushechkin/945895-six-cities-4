import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../../reducer/user/user.js";
import {getAuthStatus} from "../../../reducer/user/selectors.js";
import {Operation} from "../../../reducer/data/data.js";
import {getComments} from "../../../reducer/data/selectors.js";
import history from "../../../history.js";
import {AppRoute} from "../../../const.js";

import {getRatingWidth} from "../../../utils.js";
import CardsList from "../../cards-list/cards-list.jsx";
import Header from "../../header/header.jsx";
import Map from "../../map/map.jsx";
import Reviews from "../../reviews/reviews.jsx";

const PropertyPage = (props) => {
  const {offerId, offers, onPlaceCardHeaderClick, authStatus, reviews, postComment, onFavoritesToggle} = props;
  const isUserLoggedIn = authStatus === AuthorizationStatus.AUTH;

  const offer = offers.find((it) => it.id === offerId);
  const {pictures, isPremium, isFavorite, title, rating, type, bedrooms, guests, features, description, host, location, price} = offer;
  const {name, isPro, avatarUrl} = host;

  return (
    <div className="page">
      <Header
        isLogoActive = {false}
      />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {pictures.slice(0, 6).map((picture, index) => {
                return (
                  <div key={`${picture}-${index}`} className="property__image-wrapper">
                    <img className="property__image" src={picture} alt="Photo studio" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button${isFavorite ? ` property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingWidth(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {guests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {features.map((feature, index) => {
                    return (
                      <li key={`${feature}-${index}`} className="property__inside-item">
                        {feature}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper${isPro ? ` property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isUserLoggedIn && <span className="property__user-status">
                    Pro
                  </span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews
                reviews={reviews}
                isUserLoggedIn={isUserLoggedIn}
                offerId={offerId}
                onPostComment={postComment}
              />
            </div>
          </div>
          <Map
            city={location.coordinates}
            offers={offers}
            activeOfferId={offerId}
            className={`property__map map`}
            zoom={location.zoom}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <CardsList
                offers={offers}
                isNearPlaces={true}
                onPlaceCardHeaderClick={onPlaceCardHeaderClick}
                onActiveItemChange={() => {}}
                onFavoritesToggle={onFavoritesToggle}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

PropertyPage.propTypes = {
  offerId: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
  authStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
  reviews: PropTypes.array.isRequired,
  postComment: PropTypes.func.isRequired,
  onFavoritesToggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state),
    reviews: getComments(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment(offerId, commentData) {
    return dispatch(Operation.postComment(offerId, commentData));
  },
  onFavoritesToggle(offerId, favoriteStatus) {
    dispatch(Operation.postFavorite(offerId, favoriteStatus))
    .catch((error) => {
      if (error.response.status === 401) {
        history.push(AppRoute.LOGIN);
      }
    });
  },
});

export {PropertyPage};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);
