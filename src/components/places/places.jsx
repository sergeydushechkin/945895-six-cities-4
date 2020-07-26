import React from "react";
import PropTypes from "prop-types";

import {SortTypes} from "../../const.js";
import {sortOffers} from "../../utils.js";
import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withPlacesSorting from "../../hocs/with-places-sorting/with-places-sorting.js";

const WrappedPlacesSorting = withPlacesSorting(PlacesSorting);

const Places = (props) => {
  const {activeOffers, onActiveItemChange, activeItemId, city, sortType} = props;
  const filteredOffers = sortOffers(activeOffers, sortType);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{activeOffers.length} places to stay in {city}</b>
        <WrappedPlacesSorting />
        <div className="cities__places-list places__list tabs__content">
          <CardsList
            offers={filteredOffers}
            onActiveItemChange={onActiveItemChange}
            isNearPlaces={false}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          city={activeOffers[0].city.coordinates}
          zoom={activeOffers[0].city.zoom}
          offers={activeOffers}
          activeOfferId={activeItemId}
          className={`cities__map map`}
        />
      </div>
    </div>
  );
};

Places.propTypes = {
  activeOffers: PropTypes.array.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  activeItemId: PropTypes.any.isRequired,
  city: PropTypes.string.isRequired,
  sortType: PropTypes.oneOf([SortTypes.POPULAR, SortTypes.PRICE_LOW_HIGH, SortTypes.PRICE_HIGH_LOW, SortTypes.TOP_RATED_FIRST]).isRequired,
};

export default Places;
