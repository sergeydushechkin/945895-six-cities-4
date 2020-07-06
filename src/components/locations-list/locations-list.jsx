import React from "react";
import PropTypes from "prop-types";

class LocationsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItemId: this.props.activeItem
    };

    this.onActiveItemChange = this.onActiveItemChange.bind(this);
  }

  onActiveItemChange(id) {
    this.setState({activeItemId: id});
  }

  render() {
    const {locations, onCityChange} = this.props;
    const city = this.state.activeItemId;

    return (
      <ul className="locations__list tabs__list">
        {locations.map((it) => {
          return (
            <li key={it} className="locations__item">
              <a
                onClick={(evt) => {
                  evt.preventDefault();
                  this.onActiveItemChange(it);
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
  activeItem: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default LocationsList;
