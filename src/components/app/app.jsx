import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this._onPlaceCardHeaderClick = this._onPlaceCardHeaderClick.bind(this);
    this.state = {offerId: -1};
  }

  _onPlaceCardHeaderClick(id) {
    this.setState({offerId: id});
  }

  _renderMainScreen() {
    const {offers, users} = this.props;

    if (this.state.offerId === -1) {
      return (
        <Main
          onPlaceCardHeaderClick = {this._onPlaceCardHeaderClick}
          onLocationButtonClick = {this.props.onLocationButtonClick}
          activeOffers = {this.props.activeOffers}
          city = {this.props.city}
          offers = {this.props.offers}
        />
      );
    } else {
      return (
        <Property
          offerId = {this.state.offerId}
          offers = {offers}
          users = {users}
          onPlaceCardHeaderClick = {this._onPlaceCardHeaderClick}
        />
      );
    }
  }

  render() {
    const {offers, users} = this.props;

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
              onPlaceCardHeaderClick = {this._onPlaceCardHeaderClick}
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
  city: PropTypes.string.isRequired,
  activeOffers: PropTypes.array.isRequired,
  onLocationButtonClick: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => ({
  onLocationButtonClick(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

const mapStateToProps = (state) => {
  return {
    offers: state.offers,
    activeOffers: state.offers.filter((it) => it.city.name === state.city),
    city: state.city
  };
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
