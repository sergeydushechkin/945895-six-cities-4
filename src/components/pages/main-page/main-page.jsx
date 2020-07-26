import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../../reducer/data/data.js";
import {getFilteredOffers, getLocations, getCity} from "../../../reducer/data/selectors.js";
import {getSortType} from "../../../reducer/app/selectors.js";

import withActiveItem from "../../../hocs/with-active-item/with-active-item.js";
import Header from "../../header/header.jsx";
import LocationsList from "../../locations-list/locations-list.jsx";
import Places from "../../places/places.jsx";
import PlacesEmpty from "../../places-empty/places-empty.jsx";

const PlacesWrapped = withActiveItem(Places);

const MainPage = (props) => {
  const {city, activeOffers, locations, onCityChange, sortType} = props;

  return (
    <div className={`page page--gray page--main${activeOffers.length ? `` : ` page__main--index-empty`}`}>
      <Header
        isLogoActive = {true}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList
              city={city}
              locations={locations}
              onCityChange={onCityChange}
            />
          </section>
        </div>
        <div className="cities">
          {activeOffers.length
            ?
            <PlacesWrapped
              activeOffers={activeOffers}
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

MainPage.propTypes = {
  city: PropTypes.string.isRequired,
  activeOffers: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  onCityChange: PropTypes.func.isRequired,
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

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
