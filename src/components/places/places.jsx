import React from "react";
import PropTypes from "prop-types";

import CardsList from "../cards-list/cards-list.jsx";
import Map from "../map/map.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withPlacesSorting from "../../hocs/with-places-sorting/with-places-sorting.js";

const WrappedPlacesSorting = withPlacesSorting(PlacesSorting);

const Places = (props) => {
  const {activeOffers, onPlaceCardHeaderClick, onActiveItemChange, activeItemId, city} = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{activeOffers.length} places to stay in {city}</b>
        <WrappedPlacesSorting />
        <div className="cities__places-list places__list tabs__content">
          <CardsList
            offers={activeOffers}
            onPlaceCardHeaderClick={onPlaceCardHeaderClick}
            onActiveItemChange={onActiveItemChange}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          city={activeOffers[0].city.coordinates}
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
  onPlaceCardHeaderClick: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  activeItemId: PropTypes.any.isRequired,
  city: PropTypes.string.isRequired,
};

export default Places;
