import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {getFavorites, getFavoritesLocations} from "../../../reducer/data/selectors.js";
import {Operation} from "../../../reducer/data/data.js";

import Header from "../../header/header.jsx";
import Favorites from "../../favorites/favorites.jsx";
import FavoritesEmpty from "../../favorites-empty/favorites-empty.jsx";


class FavoritesPage extends React.PureComponent {
  constructor(props) {
    super(props);

    const {loadFavorite} = props;

    loadFavorite();
  }

  render() {
    const {favoritesOffers, favoritesLocations} = this.props;
    return (
      <div className={`page${favoritesOffers.length ? `` : `page--favorites-empty`}`}>
        <Header
          isLogoActive={false}
        />
        <main className={`page__main page__main--favorites${favoritesOffers.length ? `` : `page__main--favorites-empty`}`}>
          <div className="page__favorites-container container">
            {favoritesOffers.length
              ? <Favorites offers={favoritesOffers} locations={favoritesLocations}/>
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
  }
}

FavoritesPage.propTypes = {
  favoritesOffers: PropTypes.array.isRequired,
  favoritesLocations: PropTypes.array.isRequired,
  loadFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    favoritesOffers: getFavorites(state),
    favoritesLocations: getFavoritesLocations(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadFavorite() {
    dispatch(Operation.loadFavorite());
  }
});

export {FavoritesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);

