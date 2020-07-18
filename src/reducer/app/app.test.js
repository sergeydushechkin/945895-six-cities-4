import {SortTypes} from "../../const.js";
import {reducer, ActionType, ActionCreator} from "./app.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    sortType: SortTypes.POPULAR,
    activeOfferId: -1
  });
});

it(`Reducer should change sort type by a given value`, () => {
  expect(reducer({
    sortType: SortTypes.POPULAR,
    activeOfferId: -1,
  }, {
    type: ActionType.CHANGE_SORT,
    payload: SortTypes.PRICE_HIGH_LOW,
  })).toEqual({
    activeOfferId: -1,
    sortType: SortTypes.PRICE_HIGH_LOW,
  });
});

it(`Reducer should change active offer id by a given value`, () => {
  expect(reducer({
    sortType: SortTypes.POPULAR,
    activeOfferId: -1
  }, {
    type: ActionType.CHANGE_ACTIVE_OFFER_ID,
    payload: 2,
  })).toEqual({
    sortType: SortTypes.POPULAR,
    activeOfferId: 2,
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
});
