import {extend} from "../../utils.js";
import {SortTypes} from "../../const.js";

const initialState = {
  sortType: SortTypes.POPULAR,
  showAuthPage: false,
};

const ActionType = {
  CHANGE_SORT: `CHANGE_SORT`,
  CHANGE_AUTH_PAGE_STATE: `CHANGE_AUTH_PAGE_STATE`,
};

const ActionCreator = {
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType
  }),
  changeAuthPageState: (state) => ({
    type: ActionType.CHANGE_AUTH_PAGE_STATE,
    payload: state
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT:
      return extend(state, {sortType: action.payload});
    case ActionType.CHANGE_AUTH_PAGE_STATE:
      return extend(state, {showAuthPage: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
