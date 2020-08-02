import * as React from "react";
import * as PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilteredOffers, getCity, getSortedFilteredOffers} from "../../reducer/data/selectors";

import {CardType} from "../../const";
import CardsList from "../cards-list/cards-list";
import Map from "../map/map";
import PlacesSorting from "../places-sorting/places-sorting";
import withPlacesSorting from "../../hocs/with-places-sorting/with-places-sorting";

const WrappedPlacesSorting = withPlacesSorting(PlacesSorting);

const Places = (props) => {
  const {activeOffers, onActiveItemChange, activeItemId, city, sortedActiveOffers} = props;

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{activeOffers.length} places to stay in {city}</b>
        <WrappedPlacesSorting />
        <div className="cities__places-list places__list tabs__content">
          <CardsList
            offers={sortedActiveOffers}
            onActiveItemChange={onActiveItemChange}
            cardType={CardType.MAIN}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          city={activeOffers[0].city.coordinates}
          zoom={activeOffers[0].city.zoom}
          offers={activeOffers}
          activeOfferId={activeItemId}
          className={`cities__map map`}
        />
      </div>
    </div>
  );
};

Places.propTypes = {
  activeOffers: PropTypes.array.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  activeItemId: PropTypes.any.isRequired,
  city: PropTypes.string.isRequired,
  sortedActiveOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeOffers: getFilteredOffers(state),
    city: getCity(state),
    sortedActiveOffers: getSortedFilteredOffers(state),
  };
};

export {Places};
export default connect(mapStateToProps, null)(Places);
