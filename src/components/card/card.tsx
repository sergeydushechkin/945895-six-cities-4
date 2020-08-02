import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {Operation} from "../../reducer/data/data.js";
import {CardType, AppRoute} from "../../const.js";
import {getRatingWidth, capitalizeFirstLetter} from "../../utils.js";

const typeToArticleClass = {
  [CardType.MAIN]: `cities__place-card`,
  [CardType.PROPERTY]: `near-places__card`,
  [CardType.FAVORITES]: `favorites__card`,
};

const typeToWrapperClass = {
  [CardType.MAIN]: `cities__image-wrapper`,
  [CardType.PROPERTY]: `near-places__image-wrapper`,
  [CardType.FAVORITES]: `favorites__image-wrapper`,
};

const Card = (props) => {
  const {offer, cardType, onActiveItemChange, onFavoritesToggle} = props;
  const {title, price, rating, type, isPremium, isFavorite, id, previewImage} = offer;

  return (
    <article onMouseEnter={() => onActiveItemChange(offer.id)} onMouseLeave={() => onActiveItemChange(-1)} className={`${typeToArticleClass[cardType]} place-card`}>
      {
        isPremium && <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${typeToWrapperClass[cardType]} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === CardType.FAVORITES ? `150` : `260`}
            height={cardType === CardType.FAVORITES ? `110` : `200`}
            alt="Place image"
          />
        </a>
      </div>
      <div className={`${cardType === CardType.FAVORITES ? `favorites__card-info ` : ``}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={() => onFavoritesToggle(id, !isFavorite)} className={`place-card__bookmark-button button${isFavorite ? ` place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingWidth(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired
  }),
  onActiveItemChange: PropTypes.func.isRequired,
  onFavoritesToggle: PropTypes.func.isRequired,
  cardType: PropTypes.oneOf([CardType.MAIN, CardType.PROPERTY, CardType.FAVORITES]).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onFavoritesToggle(offerId, favoriteStatus) {
    dispatch(Operation.postFavorite(offerId, favoriteStatus));
  },
});

export {Card};
export default connect(null, mapDispatchToProps)(Card);
