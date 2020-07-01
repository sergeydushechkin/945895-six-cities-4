import offers from "./mocks/offers.js";
import users from "./mocks/users.js";
import {extend} from "./utils.js";
import {SortTypes} from "./const.js";

const initialState = {
  city: offers[0].city.name,
  offers,
  locations: Array.from(new Set(offers.map((it) => it.city.name))),
  users,
  sortType: SortTypes.POPULAR,
  activeOfferId: null
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_ACTIVE_OFFER_ID: `CHANGE_ACTIVE_OFFER_ID`,
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
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
    case ActionType.CHANGE_SORT:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return extend(state, {activeOfferId: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
