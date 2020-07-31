import history from "../../history.js";
import {AppRoute, SortTypes} from "../../const.js";
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
  nearby: [],
  sortType: SortTypes.POPULAR,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  UPDATE_FAVORITE: `UPDATE_FAVORITE`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
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
  loadNearbyOffers: (nearby) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearby,
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType
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
  getComments: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        const loadedComments = response.data.map((comment) => createCommentsGet(comment));
        dispatch(ActionCreator.loadComments(loadedComments));
        return loadedComments;
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
  },
  loadFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const loadedFavorites = response.data.map((offer) => offerAdapter(offer));
        dispatch(ActionCreator.loadFavorites(loadedFavorites));
      });
  },
  getNearbyOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        const loadedNearby = response.data.map((offer) => offerAdapter(offer));
        dispatch(ActionCreator.loadNearbyOffers(loadedNearby));
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
      const newOffers = state.offers.map((offer) => {
        const offerIndex = action.payload.findIndex((it) => it.id === offer.id);
        return offerIndex !== -1 ? action.payload[offerIndex] : offer;
      });
      return extend(state, {offers: newOffers});
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {nearby: action.payload});
    case ActionType.CHANGE_SORT:
      return extend(state, {sortType: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation, FavoriteStatus};
