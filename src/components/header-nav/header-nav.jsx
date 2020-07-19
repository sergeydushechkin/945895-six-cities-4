import React from "react";
import PropTypes from "prop-types";

import {AuthorizationStatus} from "../../reducer/user/user.js";

const HeaderNav = (props) => {
  const {authStatus, authInfo, onChangeAuthPageState} = props;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a onClick={(evt) => {
            evt.preventDefault();
            onChangeAuthPageState(true);
          }} className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              authStatus === AuthorizationStatus.AUTH
                ? <span className="header__user-name user__name">{authInfo.email}</span>
                : <span className="header__login">Sign in</span>
            }
          </a>
        </li>
      </ul>
    </nav>
  );
};

HeaderNav.propTypes = {
  authStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
  authInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.any,
    isPro: PropTypes.bool,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onChangeAuthPageState: PropTypes.func.isRequired,
};

export default HeaderNav;
