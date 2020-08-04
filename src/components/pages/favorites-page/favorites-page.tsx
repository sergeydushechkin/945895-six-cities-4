import * as React from "react";
import {connect} from "react-redux";

import {getFavorites} from "../../../reducer/data/selectors";
import {Offer} from "../../../types";

import Header from "../../header/header";
import Favorites from "../../favorites/favorites";
import FavoritesEmpty from "../../favorites-empty/favorites-empty";

interface Props {
  favoritesOffers: Array<Offer>;
}

const FavoritesPage: React.FunctionComponent<Props> = (props: Props) => {
  const {favoritesOffers} = props;
  return (
    <div className={`page${favoritesOffers.length ? `` : `page--favorites-empty`}`}>
      <Header
        isLogoActive={false}
      />
      <main className={`page__main page__main--favorites${favoritesOffers.length ? `` : `page__main--favorites-empty`}`}>
        <div className="page__favorites-container container">
          {favoritesOffers.length
            ? <Favorites />
            : <FavoritesEmpty />
          }
        </div>
      </main>
      <footer className={`footer${favoritesOffers.length ? `container` : ``}`}>
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favoritesOffers: getFavorites(state),
  };
};

export {FavoritesPage};
export default connect(mapStateToProps, null)(FavoritesPage);

