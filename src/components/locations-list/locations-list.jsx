import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const LocationsList = (props) => {
  const {city, onLocationButtonClick, locations} = props;

  return (
    <ul className="locations__list tabs__list">
      {locations.map((it) => {
        return (
          <li key={it} className="locations__item">
            <a onClick={(evt) => onLocationButtonClick(evt, it)} className={`locations__item-link tabs__item${it === city ? ` tabs__item--active` : ``}`} href="#">
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
  onLocationButtonClick: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    city: state.city,
    offers: state.offers,
    locations: state.locations
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLocationButtonClick(evt, city) {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(city));
  }
});

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
