import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export {getOffers};
