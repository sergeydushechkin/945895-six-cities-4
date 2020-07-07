import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const MainWrapped = withActiveItem(Main);

class App extends React.PureComponent {
  _renderMainScreen() {
    const {offers, users, onChangeActiveOfferId, offerId} = this.props;

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
          users = {users}
          onPlaceCardHeaderClick = {onChangeActiveOfferId}
        />
      );
    }
  }

  render() {
    const {offers, users, onChangeActiveOfferId} = this.props;

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
              users = {users}
              onPlaceCardHeaderClick = {onChangeActiveOfferId}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  onChangeActiveOfferId: PropTypes.func.isRequired,
  offerId: PropTypes.any.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onChangeActiveOfferId(id) {
    dispatch(ActionCreator.changeActiveOfferId(id));
  }
});

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    users: state.users,
    offerId: state.activeOfferId,
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
