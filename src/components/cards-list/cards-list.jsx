import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = (props) => {
  const {cardsNames} = props;

  return (
    cardsNames.map((it, index) => {
      return (
        <Card key={it + index} cardName={it} />
      );
    })
  );
};

CardsList.propTypes = {
  cardsNames: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CardsList;
