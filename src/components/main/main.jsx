import React from "react";
import PropTypes from "prop-types";
import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import LocationsList from "../locations-list/locations-list.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import {connect} from "react-redux";
import {SortTypes} from "../../const.js";

const Main = (props) => {
  const {onPlaceCardHeaderClick, city, activeOffers} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeOffers.length} places to stay in {city}</b>
              <PlacesSorting />
              <div className="cities__places-list places__list tabs__content">
                <CardsList
                  offers={activeOffers}
                  onPlaceCardHeaderClick={onPlaceCardHeaderClick}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                city={activeOffers[0].city.coordinates}
                offers={activeOffers}
                activeOfferId={1}
                className={`cities__map map`}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  activeOffers: PropTypes.array.isRequired,
};

const sortOffers = (offers, sortType) => {
  let sortedOffers = [];

  switch (sortType) {
    case SortTypes.POPULAR:
      sortedOffers = offers;
      break;
    case SortTypes.PRICE_LOW_HIGH:
      sortedOffers = offers.slice().sort((a, b) => a.price - b.price);
      break;
    case SortTypes.PRICE_HIGH_LOW:
      sortedOffers = offers.slice().sort((a, b) => b.price - a.price);
      break;
    case SortTypes.TOP_RATED_FIRST:
      sortedOffers = offers.slice().sort((a, b) => b.rating - a.rating);
      break;
  }

  return sortedOffers;
};

const mapStateToProps = (state) => {
  const filteredOffers = state.offers.filter((it) => it.city.name === state.city);

  return {
    activeOffers: sortOffers(filteredOffers, state.sortType),
    city: state.city,
  };
};

export {Main};
export default connect(mapStateToProps, null)(Main);
