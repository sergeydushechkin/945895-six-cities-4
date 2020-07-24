import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import history from "../../history.js";
import {AppRoute} from "../../const.js";

import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import Main from "../main/main.jsx";
// import Property from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";

const MainWrapped = withActiveItem(Main);

class App extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.LOGIN}>
            <SignIn
            />
          </Route>
          <Route path={AppRoute.ROOT}>
            <MainWrapped />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
