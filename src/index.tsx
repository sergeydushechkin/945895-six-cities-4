import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import {createAPI} from "./api";
import history from "./history";

import {Error} from "./const";

import reducer from "./reducer/reducer";
import {Operation as DataOperation, ActionCreator as DataActionCreator} from "./reducer/data/data";
import {AuthorizationStatus, ActionCreator as UserActionCreator, Operation as UserOperation} from "./reducer/user/user";

import App from "./components/app/app";


const onError = ((err) => {
  if (err.response && err.response.status === Error.UNAUTHORIZED) {
    store.dispatch(UserActionCreator.changeAuthStatus(AuthorizationStatus.NO_AUTH));
    throw err;
  }

  store.dispatch(DataActionCreator.changeError(err.toJSON().message));
  history.push(`/error`);
});

const api = createAPI(onError);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
    )
);

store.dispatch(DataOperation.loadOffers());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
