import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../../reducer/data/data.js";
import {getFilteredOffers, getLocations, getCity} from "../../../reducer/data/selectors.js";
import {getSortType} from "../../../reducer/app/selectors.js";

import Header from "../../header/header.jsx";
import LocationsList from "../../locations-list/locations-list.jsx";
import Places from "../../places/places.jsx";
import PlacesEmpty from "../../places-empty/places-empty.jsx";

const MainPage = (props) => {
  const {onChangeActiveOfferId, city, activeOffers, locations, onCityChange, onActiveItemChange, activeItemId, sortType} = props;

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
            <Places
              activeOffers={activeOffers}
              onPlaceCardHeaderClick={onChangeActiveOfferId}
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

MainPage.propTypes = {
  onChangeActiveOfferId: PropTypes.func.isRequired,
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
  },
  onChangeActiveOfferId(id) {
    dispatch(ActionCreator.changeActiveOfferId(id));
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
