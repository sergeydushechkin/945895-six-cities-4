import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

import {sortOffers} from "../../utils.js";

const NAME_SPACE = NameSpace.DATA;

const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

const getCity = (state) => {
  return state[NAME_SPACE].city;
};

const getComments = (state) => {
  return state[NAME_SPACE].comments;
};

const getNearby = (state) => {
  return state[NAME_SPACE].nearby;
};

const getSortType = (state) => {
  return state[NAME_SPACE].sortType;
};

const getId = (state, id) => id;

const getFilteredOffers = createSelector(
    getOffers,
    getCity,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => it.city.name === resultTwo);
    }
);

const getLocations = createSelector(
    getOffers,
    (result) => {
      return Array.from(new Set(result.map((it) => it.city.name)));
    }
);

const getFavorites = createSelector(
    getOffers,
    (result) => {
      return result.filter((it) => it.isFavorite);
    }
);

const getFavoritesLocations = createSelector(
    getFavorites,
    (result) => {
      return Array.from(new Set(result.map((it) => it.city.name)));
    }
);

const getOfferById = createSelector(
    getOffers,
    getId,
    (offers, id) => offers.find((offer) => offer.id === id)
);

const getSortedFilteredOffers = createSelector(
    getFilteredOffers,
    getSortType,
    (offers, sortType) => sortOffers(offers, sortType)
);

export {getOffers, getCity, getComments, getNearby, getSortType, getFavorites, getFilteredOffers, getLocations, getFavoritesLocations, getOfferById, getSortedFilteredOffers};
