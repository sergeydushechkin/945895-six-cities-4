import React, {createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import history from "../../../history.js";
import {AppRoute} from "../../../const.js";
import {Operation} from "../../../reducer/user/user.js";
import {Operation as DataOperation} from "../../../reducer/data/data.js";

import Header from "../../header/header.jsx";

class SignInPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.email = createRef();
    this.password = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onUserLogin, loadFavorite, onActiveItemChange} = this.props;
    evt.preventDefault();

    onUserLogin({
      email: this.email.current.value,
      password: this.password.current.value,
    })
    .then(() => {
      onActiveItemChange(``);
      loadFavorite();
      history.push(AppRoute.ROOT);
    })
    .catch((err) => {
      onActiveItemChange(err.response.data.error);
    });
  }

  render() {
    const {activeItemId} = this.props;

    return (
      <div className="page page--gray page--login">
        <Header
          isLogoActive = {false}
        />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form onSubmit={this.handleSubmit} className="login__form form" action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={this.email}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={this.password}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
                {activeItemId &&
                  <div style={{marginTop: `15px`, fontSize: `15px`, color: `#ff0000`}}>{activeItemId}</div>
                }
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

SignInPage.propTypes = {
  onUserLogin: PropTypes.func.isRequired,
  loadFavorite: PropTypes.func.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
  activeItemId: PropTypes.any.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onUserLogin(authInfo) {
    return dispatch(Operation.loginUser(authInfo));
  },
  loadFavorite() {
    dispatch(DataOperation.loadFavorite());
  }
});

export {SignInPage};
export default connect(null, mapDispatchToProps)(SignInPage);
