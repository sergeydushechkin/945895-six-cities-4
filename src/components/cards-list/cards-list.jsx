import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = (props) => {
  const {cardsNames, onPlaceCardHeaderClick} = props;

  return (
    cardsNames.map((it, index) => {
      return (
        <Card key={it + index} cardName={it} onPlaceCardHeaderClick={onPlaceCardHeaderClick}/>
      );
    })
  );
};

CardsList.propTypes = {
  cardsNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  onPlaceCardHeaderClick: PropTypes.func.isRequired
};

export default CardsList;
