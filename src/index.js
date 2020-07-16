import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {Operation} from "./reducer/data/data.js";
import {ActionCreator} from "./reducer/app/app.js";

const onUnauthorized = (() => {
  // store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
});

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

store.dispatch(Operation.loadOffers())
  .then((loadedOffers) => {
    store.dispatch(ActionCreator.changeCity(loadedOffers[0].city.name));

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.querySelector(`#root`)
    );
  });


