import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation, AuthorizationStatus} from "./user.js";

const AuthInfoRaw = {
  [`avatar_url`]: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  [`is_pro`]: false,
  name: `Oliver.conner`
};

const AuthInfo = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};
const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  });
});

it(`Reducer should update AuthorizationStatus`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  }, {
    type: ActionType.CHANGE_AUTH_STATUS,
    payload: AuthorizationStatus.AUTH,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  });
});

it(`Reducer should update authorization info by authInfo`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {
      avatarUrl: ``,
      email: ``,
      id: null,
      isPro: null,
      name: ``,
    }
  }, {
    type: ActionType.CHANGE_AUTH_INFO,
    payload: AuthInfo,
  })).toEqual({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    authInfo: {
      avatarUrl: `img/1.png`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      isPro: false,
      name: `Oliver.conner`
    }
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API GET call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authChecker = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, AuthInfoRaw);

    return authChecker(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_AUTH_INFO,
          payload: AuthInfo,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AUTH_STATUS,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API POST call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authLoader = Operation.loginUser({email: `Oliver.conner@gmail.com`, password: `12345`});

    apiMock
      .onPost(`/login`)
      .reply(200, AuthInfoRaw);

    return authLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_AUTH_INFO,
          payload: AuthInfo,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_AUTH_STATUS,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });
});
