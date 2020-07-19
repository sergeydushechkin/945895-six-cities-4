import React from "react";
import PropTypes from "prop-types";

import Navigation from "../navigation/navigation.jsx";

const Header = (props) => {
  const {isLogoActive} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className={`header__logo-link${isLogoActive ? ` header__logo-link--active` : ``}`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLogoActive: PropTypes.bool.isRequired,
};

export default Header;
