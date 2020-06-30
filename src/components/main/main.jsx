import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import LocationsList from "../locations-list/locations-list.jsx";
import {ActionCreator} from "../../reducer.js";

const Main = (props) => {
  const {offers, onPlaceCardHeaderClick, city, activeOffers, onLocationButtonClick} = props;
  const locations = Array.from(new Set(offers.map((it) => it.city.name)));

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
            <LocationsList
              locations={locations}
              activeLocation={city}
              onLocationButtonClick={onLocationButtonClick}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{activeOffers.length} places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                {/* <!--
                <select class="places__sorting-type" id="places-sorting">
                  <option class="places__option" value="popular" selected="">Popular</option>
                  <option class="places__option" value="to-high">Price: low to high</option>
                  <option class="places__option" value="to-low">Price: high to low</option>
                  <option class="places__option" value="top-rated">Top rated first</option>
                </select>
                --> */}
              </form>
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
  offers: PropTypes.array.isRequired,
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
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

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
