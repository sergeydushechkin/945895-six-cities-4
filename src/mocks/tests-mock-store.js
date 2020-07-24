import NameSpace from "../reducer/name-space.js";

import offers from "./tests-offers.js";

const testStore = {
  [NameSpace.DATA]: {
    city: offers[0].city.name,
    offers,
    activeOfferId: -1,
    comments: [],
  },
  [NameSpace.APP]: {
    sortType: `popular`,
  },
  [NameSpace.USER]: {
    authorizationStatus: `NO_AUTH`,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  },
};

export default testStore;
