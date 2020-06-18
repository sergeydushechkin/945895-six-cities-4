import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

class CardsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};
    this._onPlaceCardMouseEnter = this._onPlaceCardMouseEnter.bind(this);
  }

  _onPlaceCardMouseEnter(offer) {
    this.setState({activeOffer: offer});
  }

  render() {
    const {offers} = this.props;

    return (
      offers.map((offer) => {
        return (
          <Card key={offer.id} offer={offer} onPlaceCardMouseEnter={this._onPlaceCardMouseEnter} />
        );
      })
    );
  }
}

CardsList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        isFavorite: PropTypes.bool.isRequired
      })
  )
};

export default CardsList;
