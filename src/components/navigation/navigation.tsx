import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthStatus, getAuthInfo} from "../../reducer/user/selectors";

import {AppRoute} from "../../const";
import {AuthInfo} from "../../types";

interface Props {
  authStatus: AuthorizationStatus;
  authInfo: AuthInfo;
}

const Navigation: React.FunctionComponent<Props> = (props: Props) => {
  const {authStatus, authInfo} = props;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link
            className="header__nav-link header__nav-link--profile"
            to={authStatus === AuthorizationStatus.AUTH ? AppRoute.FAVORITES : AppRoute.LOGIN}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {
              authStatus === AuthorizationStatus.AUTH
                ? <span className="header__user-name user__name">{authInfo.email}</span>
                : <span className="header__login">Sign in</span>
            }
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state),
    authInfo: getAuthInfo(state),
  };
};

export {Navigation};
export default connect(mapStateToProps)(Navigation);
