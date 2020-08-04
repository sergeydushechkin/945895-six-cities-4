import createAuthInfo from "../../adapters/auth-info/auth-info";
import {extend} from "../../utils";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {
    avatarUrl: ``,
    email: ``,
    id: null,
    isPro: null,
    name: ``,
  }
};

const ActionType = {
  CHANGE_AUTH_STATUS: `CHANGE_AUTH_STATUS`,
  CHANGE_AUTH_INFO: `CHANGE_AUTH_INFO`,
};

const ActionCreator = {
  changeAuthStatus: (authStatus) => ({
    type: ActionType.CHANGE_AUTH_STATUS,
    payload: authStatus
  }),
  changeAuthInfo: (authStatus) => ({
    type: ActionType.CHANGE_AUTH_INFO,
    payload: authStatus
  }),
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.changeAuthInfo(createAuthInfo(response.data)));
        dispatch(ActionCreator.changeAuthStatus(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },
  loginUser: (userData) => (dispatch, getState, api) => {
    return api.post(`/login`, userData)
      .then((response) => {
        dispatch(ActionCreator.changeAuthInfo(createAuthInfo(response.data)));
        dispatch(ActionCreator.changeAuthStatus(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_STATUS:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.CHANGE_AUTH_INFO:
      return extend(state, {authInfo: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation, AuthorizationStatus};
