import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";

import {AppRoute} from "../../const.js";

const PrivateRoute = (props) => {
  const {render, path, exact, authStatus} = props;
  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  authStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]).isRequired,
};

const mapStateToProps = (state) => {
  return {
    authStatus: getAuthStatus(state),
  };
};

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
