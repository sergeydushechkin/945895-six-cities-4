import history from "../../history.js";
import {AppRoute} from "../../const.js";
import {extend} from "../../utils.js";
import offerAdapter from "../../adapters/offer/offer.js";
import createCommentsGet from "../../adapters/comment-get/comment-get.js";

const FavoriteStatus = {
  IN_FAVORITES: `1`,
  NOT_IN_FAVORITES: `0`,
};

const initialState = {
  city: ``,
  offers: [],
  comments: [],
  favorites: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  UPDATE_FAVORITE: `UPDATE_FAVORITE`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
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
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  updateFavorite: (offer) => ({
    type: ActionType.UPDATE_FAVORITE,
    payload: offer
  }),
  loadFavorites: (favorites) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: favorites
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
        dispatch(ActionCreator.updateFavorite(offerAdapter(response.data)));
      })
      .catch((error) => {
        if (error.response.status === 401) {
          history.push(AppRoute.LOGIN);
        }
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.LOAD_COMMENTS:
      return extend(state, {comments: action.payload});
    case ActionType.UPDATE_FAVORITE:
      const index = state.offers.findIndex((it) => it.id === action.payload.id);
      return extend(state, {offers: [].concat(...state.offers.slice(0, index), action.payload, ...state.offers.slice(index + 1, state.offers.length))});
    case ActionType.LOAD_FAVORITES:
      return extend(state, {favorites: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation, FavoriteStatus};
