import * as React from "react";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../../reducer/user/user";
import {getAuthStatus} from "../../../reducer/user/selectors";
import {Operation} from "../../../reducer/data/data";
import {getComments, getOfferById, getNearby} from "../../../reducer/data/selectors";
import {CardType, Offer, Comment} from "../../../types";

import {getRatingWidth} from "../../../utils";
import CardsList from "../../cards-list/cards-list";
import Header from "../../header/header";
import Map from "../../map/map";
import Reviews from "../../reviews/reviews";

interface Props {
  nearby: Array<Offer>,
  authStatus: AuthorizationStatus,
  reviews: Array<Comment>,
  postComment: (id: number, {}) => Promise<void>,
  match: {
    params: {
      id: string,
    },
  },
  loadComments: (id: number) => void,
  loadNearby: (id: number) => void,
  offer: Offer,
  onFavoritesToggle: (id: any, isFavorite: boolean) => void,
};

class PropertyPage extends React.PureComponent<Props> {
  private offerId: number;
  private prevOfferId: number;

  constructor(props) {
    super(props);

    this.offerId = parseInt(this.props.match.params.id, 10);
    this.prevOfferId = this.offerId;
  }

  componentDidMount() {
    const {loadComments, loadNearby} = this.props;

    loadComments(this.offerId);
    loadNearby(this.offerId);
  }

  componentDidUpdate() {
    const {loadComments, loadNearby} = this.props;
    this.offerId = parseInt(this.props.match.params.id, 10);

    if (this.offerId !== this.prevOfferId) {
      loadComments(this.offerId);
      loadNearby(this.offerId);
      this.prevOfferId = this.offerId;
    }
  }

  render() {
    const offerId = this.offerId;
    const {authStatus, reviews, postComment, offer, nearby, onFavoritesToggle} = this.props;
    const isUserLoggedIn = authStatus === AuthorizationStatus.AUTH;
    const mapOffers = [].concat(nearby, offer);

    const {pictures, isPremium, isFavorite, title, rating, type, bedrooms, guests, features, description, host, location, price, city} = offer;
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
                  <button onClick={() => onFavoritesToggle(offerId, !isFavorite)} className={`property__bookmark-button button${isFavorite ? ` property__bookmark-button--active` : ``}`} type="button">
                    <svg className="place-card__bookmark-icon" width="31" height="33">
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
              offers={mapOffers}
              activeOfferId={offerId}
              className={`property__map map`}
              zoom={city.zoom}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <CardsList
                  offers={nearby}
                  onActiveItemChange={() => {}}
                  cardType={CardType.PROPERTY}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    authStatus: getAuthStatus(state),
    reviews: getComments(state),
    offer: getOfferById(state, parseInt(ownProps.match.params.id, 10)),
    nearby: getNearby(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (offerId, commentData) => {
    return dispatch(Operation.postComment(offerId, commentData));
  },
  loadComments: (offerId) => {
    return dispatch(Operation.getComments(offerId));
  },
  loadNearby: (offerId) => {
    return dispatch(Operation.getNearbyOffers(offerId));
  },
  onFavoritesToggle: (offerId, favoriteStatus) => {
    dispatch(Operation.postFavorite(offerId, favoriteStatus));
  },
});

export {PropertyPage};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);
