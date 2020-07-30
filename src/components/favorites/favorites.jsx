import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFavorites, getFavoritesLocations} from "../../reducer/data/selectors.js";
import FavoritesLocations from "../favorites-locations/favorites-locations.jsx";

const Favorites = (props) => {
  const {favoritesOffers, favoritesLocations} = props;

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesLocations.map((location) =>
          <FavoritesLocations
            key={location}
            location={location}
            offers={favoritesOffers.filter((it) => it.city.name === location)}
          />
        )}
      </ul>
    </section>
  );
};

Favorites.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  favoritesLocations: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    favoritesOffers: getFavorites(state),
    favoritesLocations: getFavoritesLocations(state),
  };
};

export {Favorites};
export default connect(mapStateToProps, null)(Favorites);

