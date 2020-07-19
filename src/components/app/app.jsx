import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/app/app.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getOffers} from "../../reducer/data/selectors.js";
import {getActiveOfferId, getShowAuthPage} from "../../reducer/app/selectors.js";

const MainWrapped = withActiveItem(Main);

class App extends React.PureComponent {
  _renderMainScreen() {
    const {offers, onChangeActiveOfferId, offerId, showAuth} = this.props;

    if (showAuth) {
      return (
        <SignIn />
      );
    }

    if (offerId === -1) {
      return (
        <MainWrapped
          initActiveItemId={-1}
          onPlaceCardHeaderClick = {onChangeActiveOfferId}
        />
      );
    } else {
      return (
        <Property
          offerId = {offerId}
          offers = {offers}
          onPlaceCardHeaderClick = {onChangeActiveOfferId}
        />
      );
    }
  }

  render() {
    const {offers, onChangeActiveOfferId} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMainScreen()}
          </Route>
          <Route exact path="/property">
            <Property
              offerId = {1}
              offers = {offers}
              onPlaceCardHeaderClick = {onChangeActiveOfferId}
            />
          </Route>
          <Route exact path="/signin">
            <SignIn
            />
          </Route>
        </Switch>
      </BrowserRouter>
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
    dispatch(ActionCreator.changeActiveOfferId(id));
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
