import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {getShowAuthPage} from "../../reducer/app/selectors.js";
import {getOffers, getActiveOfferId} from "../../reducer/data/selectors.js";
import history from "../../history.js";

import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import Main from "../main/main.jsx";
// import Property from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";

const MainWrapped = withActiveItem(Main);

class App extends React.PureComponent {
  render() {
    const {onChangeActiveOfferId} = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <MainWrapped
              initActiveItemId={-1}
              onPlaceCardHeaderClick = {onChangeActiveOfferId}
            />
          </Route>
          <Route exact path="/login">
            <SignIn
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  onChangeActiveOfferId: PropTypes.func.isRequired,
  offerId: PropTypes.any.isRequired,
  showAuth: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveOfferId(id) {
    dispatch(DataActionCreator.changeActiveOfferId(id));
  }
});

const mapStateToProps = (state) => {
  return {
    offers: getOffers(state),
    offerId: getActiveOfferId(state),
    showAuth: getShowAuthPage(state),
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
