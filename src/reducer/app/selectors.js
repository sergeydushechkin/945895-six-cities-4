import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.APP;

const getSortType = (state) => {
  return state[NAME_SPACE].sortType;
};

const getActiveOfferId = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

const getShowAuthPage = (state) => {
  return state[NAME_SPACE].showAuthPage;
};

export {getSortType, getActiveOfferId, getShowAuthPage};
