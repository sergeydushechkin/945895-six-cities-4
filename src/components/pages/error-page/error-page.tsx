import * as React from "react";
import {connect} from "react-redux";

import {getErrorText} from "../../../reducer/data/selectors";

import Header from "../../header/header";

interface Props {
  errorText: string;
}

const ErrorPage: React.FunctionComponent<Props> = (props: Props) => {
  const {errorText} = props;

  return (
    <div className="page page--gray page--main page__main--index-empty">
      <Header
        isLogoActive = {true}
      />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">{errorText}</b>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    errorText: getErrorText(state),
  };
};

export {ErrorPage};
export default connect(mapStateToProps, null)(ErrorPage);
