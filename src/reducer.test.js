import {reducer, ActionCreator, ActionType} from "./reducer.js";
import offers from "./mocks/offers.js";
import users from "./mocks/users.js";

import {SortTypes} from "./const.js";

const locations = Array.from(new Set(offers.map((it) => it.city.name)));

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: offers[0].city.name,
    offers,
    locations: Array.from(new Set(offers.map((it) => it.city.name))),
    users,
    sortType: SortTypes.POPULAR,
    activeOfferId: null
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

it(`Reducer should change sort type by a given value`, () => {
  expect(reducer({
    offers,
    locations,
    users,
    sortType: SortTypes.POPULAR
  }, {
    type: ActionType.CHANGE_SORT,
    payload: SortTypes.PRICE_HIGH_LOW,
  })).toEqual({
    offers,
    locations,
    users,
    sortType: SortTypes.PRICE_HIGH_LOW
  });
});

it(`Reducer should change active offer id by a given value`, () => {
  expect(reducer({
    offers,
    locations,
    users,
    sortType: SortTypes.POPULAR,
    activeOfferId: null
  }, {
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: 2,
  })).toEqual({
    offers,
    locations,
    users,
    sortType: SortTypes.POPULAR,
    activeOfferId: 2,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Paris`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Paris`,
    });
  });

  it(`Action creator for changing sort returns correct action`, () => {
    expect(ActionCreator.changeSort(SortTypes.TOP_RATED_FIRST)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: SortTypes.TOP_RATED_FIRST,
    });
  });

  it(`Action creator for changing offer id returns correct action`, () => {
    expect(ActionCreator.changeActiveOfferId(3)).toEqual({
      type: ActionType.CHANGE_ACTIVE_OFFER_ID,
      payload: 3,
    });
  });
});
