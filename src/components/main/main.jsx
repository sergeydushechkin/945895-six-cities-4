import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator, Operation} from "../../reducer/data/data.js";
import {getFilteredOffers, getLocations, getCity} from "../../reducer/data/selectors.js";
import {getSortType} from "../../reducer/app/selectors.js";

import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import Header from "../header/header.jsx";
import LocationsList from "../locations-list/locations-list.jsx";
import Places from "../places/places.jsx";
import PlacesEmpty from "../places-empty/places-empty.jsx";

const LocationsListWrapped = withActiveItem(LocationsList);

const Main = (props) => {
  const {onPlaceCardHeaderClick, city, activeOffers, locations, onCityChange, onActiveItemChange, activeItemId, sortType, onFavoritesToggle} = props;

  return (
    <div className={`page page--gray page--main${activeOffers.length ? `` : ` page__main--index-empty`}`}>
      <Header
        isLogoActive = {true}
      />
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
              onFavoritesToggle={onFavoritesToggle}
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
  onFavoritesToggle: PropTypes.func.isRequired,
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
  onFavoritesToggle(offerId, favoriteStatus) {
    return dispatch(Operation.postFavorite(offerId, favoriteStatus));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
