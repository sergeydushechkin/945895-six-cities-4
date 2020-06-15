import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main.jsx";

const placeCardHeaderHandler = () => {};

const App = (props) => {
  const {rentsCount, cardsNames} = props;

  return (
    <Main
      rentsCount={rentsCount}
      cardsNames = {cardsNames}
      onPlaceCardHeaderClick = {placeCardHeaderHandler}
    />
  );
};

App.propTypes = {
  rentsCount: PropTypes.number.isRequired,
  cardsNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
