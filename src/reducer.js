import {extend} from "./utils.js";
import {SortTypes} from "./const.js";
import offerAdapter from "./adapters/offer.js";

const initialState = {
  city: ``,
  offers: [],
  sortType: SortTypes.POPULAR,
  activeOfferId: -1
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType
  }),
  changeActiveOfferId: (id) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: id
  }),
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const loadedOffers = response.data.map((offer) => offerAdapter(offer));
        dispatch(ActionCreator.loadOffers(loadedOffers));
        dispatch(ActionCreator.changeCity(loadedOffers[0].city.name));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.CHANGE_SORT:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return extend(state, {activeOfferId: action.payload});
    case ActionType.LOAD_OFFERS:
      return extend(state, {offers: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation};
