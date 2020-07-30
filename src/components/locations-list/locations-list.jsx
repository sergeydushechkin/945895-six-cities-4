import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/data/data.js";
import {getLocations, getCity} from "../../reducer/data/selectors.js";

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

const mapStateToProps = (state) => {
  return {
    city: getCity(state),
    locations: getLocations(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCityChange(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
