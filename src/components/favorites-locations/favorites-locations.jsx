import React from "react";
import PropTypes from "prop-types";

import {CardType} from "../../const.js";
import CardsList from "../cards-list/cards-list.jsx";

const FavoritesLocations = (props) => {
  const {location, offers} = props;

  return (
    <li key={location} className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{location}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <CardsList
          offers={offers}
          onActiveItemChange={() => {}}
          cardType={CardType.FAVORITES}
        />
      </div>
    </li>
  );
};

FavoritesLocations.propTypes = {
  location: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default FavoritesLocations;

