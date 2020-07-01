import offers from "./mocks/offers.js";
import users from "./mocks/users.js";
import {extend} from "./utils.js";

const initialState = {
  city: offers[0].city.name,
  offers,
  locations: Array.from(new Set(offers.map((it) => it.city.name))),
  users
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
