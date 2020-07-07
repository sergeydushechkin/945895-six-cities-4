import React from "react";
import PropTypes from "prop-types";

class LocationsList extends React.PureComponent {
  render() {
    const {locations, onCityChange, onActiveItemChange, activeItemId} = this.props;
    const city = activeItemId;

    return (
      <ul className="locations__list tabs__list">
        {locations.map((it) => {
          return (
            <li key={it} className="locations__item">
              <a
                onClick={(evt) => {
                  evt.preventDefault();
                  onActiveItemChange(it);
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
  activeItemId: PropTypes.any.isRequired,
  onCityChange: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default LocationsList;
