import React from "react";
import PropTypes from "prop-types";

class LocationsList extends React.PureComponent {
  render() {
    const {locations, onCityChange, city} = this.props;

    return (
      <ul className="locations__list tabs__list">
        {locations.map((it) => {
          return (
            <li key={it} className="locations__item">
              <a
                onClick={(evt) => {
                  evt.preventDefault();
                  onCityChange(it);
                }}
                className={`locations__item-link tabs__item${it === city ? ` tabs__item--active` : ``}`}
                href="#"
              >
                <span>{it}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default LocationsList;
