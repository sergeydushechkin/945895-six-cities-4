import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus, getAuthInfo} from "../../reducer/user/selectors.js";
import {ActionCreator} from "../../reducer/app/app.js";
import HeaderNav from "../header-nav/header-nav.jsx";

const Header = (props) => {
  const {isLogoActive, authInfo, authStatus, onChangeAuthPageState} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className={`header__logo-link${isLogoActive ? ` header__logo-link--active` : ``}`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <HeaderNav
            authInfo={authInfo}
            authStatus={authStatus}
            onChangeAuthPageState={onChangeAuthPageState}
          />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  isLogoActive: PropTypes.bool.isRequired,
  authInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.any,
    isPro: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired,
  authStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
  onChangeAuthPageState: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state),
    authInfo: getAuthInfo(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onChangeAuthPageState(state) {
    dispatch(ActionCreator.changeAuthPageState(state));
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
