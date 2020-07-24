import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import history from "../../history.js";
import {AppRoute} from "../../const.js";

import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import MainPage from "../pages/main-page/main-page.jsx";
// import PropertyPage from "../pages/property-page/property-page.jsx";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";

const MainPageWrapped = withActiveItem(MainPage);

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.LOGIN}>
            <SignInPage
            />
          </Route>
          <Route path={AppRoute.ROOT}>
            <MainPageWrapped />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
