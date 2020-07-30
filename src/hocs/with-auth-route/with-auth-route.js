import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";

const withAuthRoute = (Component, path) => {
  const WithPrivateRoute = (props) => {
    const {authStatus} = props;
    return authStatus === AuthorizationStatus.AUTH
      ? <Component {...props} />
      : <Redirect to={path} />;
  };

  WithPrivateRoute.propTypes = {
    authStatus: PropTypes.string.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      authStatus: getAuthStatus(state),
    };
  };

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withAuthRoute;
