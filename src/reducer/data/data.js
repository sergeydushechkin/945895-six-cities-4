import {extend} from "../../utils.js";
import offerAdapter from "../../adapters/offer.js";
import createCommentsGet from "../../adapters/comment-get.js";

const FavoriteStatus = {
  IN_FAVORITES: `1`,
  NOT_IN_FAVORITES: `0`,
};

const initialState = {
  city: ``,
  offers: [],
  activeOfferId: -1,
  comments: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const ActionCreator = {
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeActiveOfferId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: id
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const loadedOffers = response.data.map((offer) => offerAdapter(offer));
        dispatch(ActionCreator.loadOffers(loadedOffers));
        dispatch(ActionCreator.changeCity(loadedOffers[0].city.name));
        return loadedOffers;
      });
  },
  postComment: (offerId, commentsData) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, commentsData)
      .then((response) => {
        const loadedComments = response.data.map((comment) => createCommentsGet(comment));
        dispatch(ActionCreator.loadComments(loadedComments));
        return loadedComments;
      });
  },
  postFavorite: (offerId, isFavorite) => (dispatch, getState, api) => {
    const favoriteStatus = isFavorite ? FavoriteStatus.IN_FAVORITES : FavoriteStatus.NOT_IN_FAVORITES;
    return api.post(`/favorite/${offerId}/${favoriteStatus}`)
      .then((response) => {
        const loadedOffer = offerAdapter(response.data);
        const offers = getState().offers = getState().offers;
        const index = offers.findIndex((it) => it.id === loadedOffer.id);
        const newOffers = [].concat(...offers.slice(0, index), loadedOffer, ...offers.slice(index + 1, offers.length));
        dispatch(ActionCreator.loadOffers(newOffers));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return extend(state, {activeOfferId: action.payload});
    case ActionType.LOAD_COMMENTS:
      return extend(state, {comments: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation, FavoriteStatus};
