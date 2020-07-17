import {SortTypes} from "../../const.js";
import {reducer, ActionType, ActionCreator} from "./app.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    sortType: SortTypes.POPULAR,
    activeOfferId: -1,
    showAuthPage: false,
  });
});

it(`Reducer should change sort type by a given value`, () => {
  expect(reducer({
    sortType: SortTypes.POPULAR,
    activeOfferId: -1,
    showAuthPage: false,
  }, {
    type: ActionType.CHANGE_SORT,
    payload: SortTypes.PRICE_HIGH_LOW,
  })).toEqual({
    activeOfferId: -1,
    showAuthPage: false,
    sortType: SortTypes.PRICE_HIGH_LOW,
  });
});

it(`Reducer should change active offer id by a given value`, () => {
  expect(reducer({
    sortType: SortTypes.POPULAR,
    activeOfferId: -1,
    showAuthPage: false,
  }, {
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: 2,
  })).toEqual({
    sortType: SortTypes.POPULAR,
    activeOfferId: 2,
    showAuthPage: false,
  });
});

it(`Reducer should change auth page state id by a given value`, () => {
  expect(reducer({
    city: ``,
    sortType: SortTypes.POPULAR,
    activeOfferId: -1,
    showAuthPage: false,
  }, {
    type: ActionType.CHANGE_AUTH_PAGE_STATE,
    payload: true,
  })).toEqual({
    city: ``,
    sortType: SortTypes.POPULAR,
    activeOfferId: -1,
    showAuthPage: true,
  });
});


describe(`Action creators work correctly`, () => {
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

  it(`Action creator for changing auth state page returns correct action`, () => {
    expect(ActionCreator.changeAuthPageState(true)).toEqual({
      type: ActionType.CHANGE_AUTH_PAGE_STATE,
      payload: true,
    });
  });
});
