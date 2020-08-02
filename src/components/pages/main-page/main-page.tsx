import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFilteredOffers} from "../../../reducer/data/selectors.js";

import withActiveItem from "../../../hocs/with-active-item/with-active-item.js";
import Header from "../../header/header.jsx";
import LocationsList from "../../locations-list/locations-list.jsx";
import Places from "../../places/places.jsx";
import PlacesEmpty from "../../places-empty/places-empty.jsx";

const PlacesWrapped = withActiveItem(Places);

const MainPage = (props) => {
  const {activeOffers} = props;

  return (
    <div className={`page page--gray page--main${activeOffers.length ? `` : ` page__main--index-empty`}`}>
      <Header
        isLogoActive = {true}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList />
          </section>
        </div>
        <div className="cities">
          {activeOffers.length ? <PlacesWrapped /> : <PlacesEmpty />}
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  activeOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    activeOffers: getFilteredOffers(state),
  };
};

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
