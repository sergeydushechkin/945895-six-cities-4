import NameSpace from "../reducer/name-space";

import offers from "./tests-offers";

const testStore = {
  [NameSpace.DATA]: {
    city: offers[0].city.name,
    offers,
    comments: [],
    nearby: [],
    sortType: `popular`,
    errorText: ``,
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
