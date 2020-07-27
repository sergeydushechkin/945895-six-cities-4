import {SortTypes} from "../../const.js";
import {reducer, ActionType, ActionCreator} from "./app.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      sortType: SortTypes.POPULAR,
    });
  });

  it(`Reducer should change sort type by a given value`, () => {
    expect(reducer({
      sortType: SortTypes.POPULAR,
    }, {
      type: ActionType.CHANGE_SORT,
      payload: SortTypes.PRICE_HIGH_LOW,
    })).toEqual({
      sortType: SortTypes.PRICE_HIGH_LOW,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing sort returns correct action`, () => {
    expect(ActionCreator.changeSort(SortTypes.TOP_RATED_FIRST)).toEqual({
      type: ActionType.CHANGE_SORT,
      payload: SortTypes.TOP_RATED_FIRST,
    });
  });
});
