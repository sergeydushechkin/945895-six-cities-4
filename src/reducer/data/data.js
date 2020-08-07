import history from "../../history";
import {SortTypes} from "../../types";
import {AppRoute, Error} from "../../const";
import {extend} from "../../utils";
import offerAdapter from "../../adapters/offer/offer";
import createCommentsGet from "../../adapters/comment-get/comment-get";
import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

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
  errorText: ``,
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_ERROR: `CHANGE_ERROR`,
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
  loadNearbyOffers: (nearby) => ({
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearby,
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType
  }),
  changeError: (errorText) => ({
    type: ActionType.CHANGE_ERROR,
    payload: errorText
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
        const changedOffer = offerAdapter(response.data);
        const stateOffers = getState()[NAME_SPACE].offers;

        const index = stateOffers.findIndex((it) => it.id === changedOffer.id);
        const newOffers = [].concat(...stateOffers.slice(0, index), changedOffer, ...stateOffers.slice(index + 1, stateOffers.length));
        dispatch(ActionCreator.loadOffers(newOffers));
      })
      .catch((error) => {
        if (error.response.status === Error.UNAUTHORIZED) {
          history.push(AppRoute.LOGIN);
        }
      });
  },
  loadFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const loadedFavorites = response.data.map((offer) => offerAdapter(offer));
        const newOffers = getState()[NAME_SPACE].offers.map((offer) => {
          const offerIndex = loadedFavorites.findIndex((it) => it.id === offer.id);
          return offerIndex !== -1 ? loadedFavorites[offerIndex] : offer;
        });
        dispatch(ActionCreator.loadOffers(newOffers));
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
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {nearby: action.payload});
    case ActionType.CHANGE_SORT:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_ERROR:
      return extend(state, {errorText: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation, FavoriteStatus};
