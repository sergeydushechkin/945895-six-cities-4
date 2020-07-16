import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.APP;

const getCity = (state) => {
  return state[NAME_SPACE].city;
};

const getSortType = (state) => {
  return state[NAME_SPACE].sortType;
};

const getActiveOfferId = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

export {getCity, getSortType, getActiveOfferId};
