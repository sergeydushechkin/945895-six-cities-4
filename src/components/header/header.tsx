import * as React from "react";
import {Link} from "react-router-dom";

import {AppRoute} from "../../const";
import Navigation from "../navigation/navigation";

interface Props {
  isLogoActive: boolean,
};

const Header: React.FunctionComponent<Props> = (props) => {
  const {isLogoActive} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.ROOT} className={`header__logo-link${isLogoActive ? ` header__logo-link--active` : ``}`}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
