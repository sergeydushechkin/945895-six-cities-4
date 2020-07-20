import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.APP;

const getSortType = (state) => {
  return state[NAME_SPACE].sortType;
};

const getShowAuthPage = (state) => {
  return state[NAME_SPACE].showAuthPage;
};

export {getSortType, getShowAuthPage};
