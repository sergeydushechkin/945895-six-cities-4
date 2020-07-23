import {SortTypes} from "../../const.js";
import {reducer, ActionType, ActionCreator} from "./app.js";

describe(`Reducer work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      sortType: SortTypes.POPULAR,
      showAuthPage: false,
    });
  });

  it(`Reducer should change sort type by a given value`, () => {
    expect(reducer({
      sortType: SortTypes.POPULAR,
      showAuthPage: false,
    }, {
      type: ActionType.CHANGE_SORT,
      payload: SortTypes.PRICE_HIGH_LOW,
    })).toEqual({
      showAuthPage: false,
      sortType: SortTypes.PRICE_HIGH_LOW,
    });
  });

  it(`Reducer should change auth page state id by a given value`, () => {
    expect(reducer({
      sortType: SortTypes.POPULAR,
      showAuthPage: false,
    }, {
      type: ActionType.CHANGE_AUTH_PAGE_STATE,
      payload: true,
    })).toEqual({
      sortType: SortTypes.POPULAR,
      showAuthPage: true,
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

  it(`Action creator for changing auth state page returns correct action`, () => {
    expect(ActionCreator.changeAuthPageState(true)).toEqual({
      type: ActionType.CHANGE_AUTH_PAGE_STATE,
      payload: true,
    });
  });
});
