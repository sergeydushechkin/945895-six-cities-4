import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const CardsList = (props) => {
  const {offers, isNearPlaces = false, onPlaceCardHeaderClick, onActiveItemChange} = props;

  return (
    offers.map((offer) => {
      return (
        <Card
          key={offer.id}
          offer={offer}
          isNearPlaces={isNearPlaces}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
          onActiveItemChange={onActiveItemChange}
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
  isNearPlaces: PropTypes.bool,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default CardsList;
