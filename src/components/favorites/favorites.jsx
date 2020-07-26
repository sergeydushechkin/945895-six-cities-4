import React from "react";
import PropTypes from "prop-types";

import FavoritesLocations from "../favorites-locations/favorites-locations.jsx";

const Favorites = (props) => {
  const {offers, locations} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {locations.map((location) => <FavoritesLocations key={location} location={location} offers={offers}/>)}
      </ul>
    </section>
  );
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
};

export default Favorites;

