import {extend} from "../../utils.js";
import offerAdapter from "../../adapters/offer.js";
import createCommentsGet from "../../adapters/comment-get.js";

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
  CHANGE_COMMENTS: `CHANGE_COMMENTS`,
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
    type: ActionType.CHANGE_COMMENTS,
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
  postComment: (offerId,commentData) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, commentData)
      .then((response) => {
        const loadedComments = response.data.map((comment) => createCommentsGet(comment));
        dispatch(ActionCreator.loadComments(loadedComments));
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
    case ActionType.CHANGE_COMMENTS:
      return extend(state, {comments: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
