import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus, getAuthInfo} from "../../reducer/user/selectors.js";
import {ActionCreator} from "../../reducer/app/app.js";

const Navigation = (props) => {
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

Navigation.propTypes = {
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

export {Navigation};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
