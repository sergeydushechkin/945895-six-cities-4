import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import history from "../../history.js";
import {AppRoute} from "../../const.js";

import MainPage from "../pages/main-page/main-page.jsx";
import PropertyPage from "../pages/property-page/property-page.jsx";
import SignInPage from "../pages/sign-in-page/sign-in-page.jsx";
import FavoritesPage from "../pages/favorites-page/favorites-page.jsx";
import withAuthRoute from "../../hocs/withAuthRoute/withAuthRoute.js";

const FavoritesPageWrapped = withAuthRoute(FavoritesPage, AppRoute.LOGIN);

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.LOGIN} component={SignInPage}/>
          <Route exact path={`${AppRoute.OFFER}/:id`} component={PropertyPage} />
          <Route exact path={AppRoute.FAVORITES} component={FavoritesPageWrapped} />
          <Route path={AppRoute.ROOT} component={MainPage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
