import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

class CardsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOfferId: null};
    this._onPlaceCardMouseEnter = this._onPlaceCardMouseEnter.bind(this);
  }

  _onPlaceCardMouseEnter(id) {
    this.setState({activeOfferId: id});
  }

  render() {
    const {offers, isNearPlaces = false, onPlaceCardHeaderClick} = this.props;

    return (
      offers.map((offer) => {
        return (
          <Card
            key={offer.id}
            offer={offer}
            isNearPlaces={isNearPlaces}
            onPlaceCardMouseEnter={this._onPlaceCardMouseEnter}
            onPlaceCardHeaderClick={onPlaceCardHeaderClick}/>
        );
      })
    );
  }
}

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
  onPlaceCardHeaderClick: PropTypes.func.isRequired
};

export default CardsList;
