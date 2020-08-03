import * as React from "react";
import {connect} from "react-redux";

import {getFilteredOffers} from "../../../reducer/data/selectors";
import {Offer} from "../../../types";

import withActiveItem from "../../../hocs/with-active-item/with-active-item";
import Header from "../../header/header";
import LocationsList from "../../locations-list/locations-list";
import Places from "../../places/places";
import PlacesEmpty from "../../places-empty/places-empty";

interface Props {
  activeOffers: Array<Offer>;
}

const PlacesWrapped = withActiveItem(Places);

const MainPage: React.FunctionComponent<Props> = (props: Props) => {
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

const mapStateToProps = (state) => {
  return {
    activeOffers: getFilteredOffers(state),
  };
};

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
