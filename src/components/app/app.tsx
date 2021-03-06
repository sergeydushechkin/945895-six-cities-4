import * as React from "react";
import {Router, Route, Switch} from "react-router-dom";

import history from "../../history";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../reducer/user/user";

import MainPage from "../pages/main-page/main-page";
import PropertyPage from "../pages/property-page/property-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import ErrorPage from "../pages/error-page/error-page";
import withAuthRoute from "../../hocs/with-auth-route/with-auth-route";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const FavoritesPageWrapped = withAuthRoute(AuthorizationStatus.AUTH, FavoritesPage, AppRoute.LOGIN);
const SignInPageWrapped = withActiveItem(withAuthRoute(AuthorizationStatus.NO_AUTH, SignInPage, AppRoute.ROOT));

const App: React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.LOGIN} component={SignInPageWrapped}/>
        <Route exact path={`${AppRoute.OFFER}/:id`} component={PropertyPage} />
        <Route exact path={AppRoute.FAVORITES} component={FavoritesPageWrapped} />
        <Route path={AppRoute.ERROR} component={ErrorPage}/>
        <Route path={AppRoute.ROOT} component={MainPage}/>
      </Switch>
    </Router>
  );
};

export default App;
