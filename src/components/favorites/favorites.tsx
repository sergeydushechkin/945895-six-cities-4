import * as React from "react";
import {connect} from "react-redux";

import {Offer} from "../../types";
import {getFavorites, getFavoritesLocations} from "../../reducer/data/selectors";
import FavoritesLocations from "../favorites-locations/favorites-locations";

interface Props {
  favoritesOffers: Array<Offer>,
  favoritesLocations: Array<string>,
};

const Favorites: React.FunctionComponent<Props> = (props) => {
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

const mapStateToProps = (state) => {
  return {
    favoritesOffers: getFavorites(state),
    favoritesLocations: getFavoritesLocations(state),
  };
};

export {Favorites};
export default connect(mapStateToProps, null)(Favorites);

