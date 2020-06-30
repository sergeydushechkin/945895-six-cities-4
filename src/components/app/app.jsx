import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

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
  rentsCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired
};

export default App;
