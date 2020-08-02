import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = (props) => {
  const {offers, onActiveItemChange, cardType} = props;

  return (
    offers.map((offer) => {
      return (
        <Card
          key={offer.id}
          offer={offer}
          onActiveItemChange={onActiveItemChange}
          cardType={cardType}
        />
      );
    })
  );
};

CardsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
  ),
  onActiveItemChange: PropTypes.func.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default CardsList;
