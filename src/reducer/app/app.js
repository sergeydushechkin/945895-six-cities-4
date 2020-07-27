import {extend} from "../../utils.js";
import {SortTypes} from "../../const.js";

const initialState = {
  sortType: SortTypes.POPULAR,
};

const ActionType = {
  CHANGE_SORT: `CHANGE_SORT`,
};

const ActionCreator = {
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortType
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT:
      return extend(state, {sortType: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
