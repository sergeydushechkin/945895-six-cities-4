import {reducer, ActionCreator, ActionType} from "./reducer.js";
import offers from "./mocks/offers.js";
import users from "./mocks/users.js";

const locations = Array.from(new Set(offers.map((it) => it.city.name)));

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: offers[0].city.name,
    offers,
    locations,
    users
  });
});

it(`Reducer should change city name by a given value`, () => {
  expect(reducer({
    city: offers[0].city.name,
    offers,
    locations,
    users
  }, {
    type: ActionType.CHANGE_CITY,
    payload: `Paris`,
  })).toEqual({
    city: `Paris`,
    offers,
    locations,
    users
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });
});
