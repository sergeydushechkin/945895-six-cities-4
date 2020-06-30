import React from "react";
import PropTypes from "prop-types";

const LocationsList = (props) => {
  const {locations, activeLocation, onLocationButtonClick} = props;

  return (
    <ul className="locations__list tabs__list">
      {locations.map((it) => {
        return (
          <li key={it} className="locations__item">
            <a onClick={() => onLocationButtonClick(it)} className={`locations__item-link tabs__item${it === activeLocation ? ` tabs__item--active` : ``}`} href="#">
              <span>{it}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeLocation: PropTypes.string.isRequired,
  onLocationButtonClick: PropTypes.func.isRequired
};

export default LocationsList;
