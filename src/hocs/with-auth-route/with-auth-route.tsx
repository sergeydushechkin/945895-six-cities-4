import * as React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthStatus} from "../../reducer/user/selectors";

interface Props {
  authStateStatus: string;
}

const withAuthRoute = (authStatus, Component, path) => {
  const WithPrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
    const {authStateStatus} = props;
    return authStateStatus === authStatus
      ? <Component {...props} />
      : <Redirect to={path} />;
  };

  const mapStateToProps = (state) => {
    return {
      authStateStatus: getAuthStatus(state),
    };
  };

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withAuthRoute;
