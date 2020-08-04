import * as React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {AuthorizationStatus} from "../../reducer/user/user";
import {getAuthStatus} from "../../reducer/user/selectors";

interface Props {
  authStatus: string;
}

const withAuthRoute = (Component, path) => {
  const WithPrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
    const {authStatus} = props;
    return authStatus === AuthorizationStatus.AUTH
      ? <Component {...props} />
      : <Redirect to={path} />;
  };

  const mapStateToProps = (state) => {
    return {
      authStatus: getAuthStatus(state),
    };
  };

  return connect(mapStateToProps)(WithPrivateRoute);
};

export default withAuthRoute;
