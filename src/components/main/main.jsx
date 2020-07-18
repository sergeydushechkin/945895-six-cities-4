import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/data/data.js";
import LocationsList from "../locations-list/locations-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import Places from "../places/places.jsx";
import PlacesEmpty from "../places-empty/places-empty.jsx";
import {getFilteredOffers, getLocations} from "../../reducer/data/selectors.js";
import {getSortType} from "../../reducer/app/selectors.js";
import {getCity} from "../../reducer/data/selectors.js";

const LocationsListWrapped = withActiveItem(LocationsList);

const Main = (props) => {
  const {onPlaceCardHeaderClick, city, activeOffers, locations, onCityChange, onActiveItemChange, activeItemId, sortType} = props;

  return (
    <div className={`page page--gray page--main${activeOffers.length ? `` : ` page__main--index-empty`}`}>
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
            <LocationsListWrapped
              initActiveItemId={locations[0]}
              locations={locations}
              onCityChange={onCityChange}
            />
          </section>
        </div>
        <div className="cities">
          {activeOffers.length
            ?
            <Places
              activeOffers={activeOffers}
              onPlaceCardHeaderClick={onPlaceCardHeaderClick}
              onActiveItemChange={onActiveItemChange}
              activeItemId={activeItemId}
              city={city}
              sortType={sortType}
            />
            :
            <PlacesEmpty />
          }
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  activeOffers: PropTypes.array.isRequired,
  activeItemId: PropTypes.any.isRequired,
  locations: PropTypes.array.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeOffers: getFilteredOffers(state),
    city: getCity(state),
    locations: getLocations(state),
    sortType: getSortType(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
