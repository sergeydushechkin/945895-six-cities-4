import * as React from "react";
import {connect} from "react-redux";

import history from "../../../history";
import {AppRoute} from "../../../const";
import {Operation} from "../../../reducer/user/user";
import {Operation as DataOperation} from "../../../reducer/data/data";

import Header from "../../header/header";

interface Props {
    onUserLogin: (userData: {email: string, password: string}) => Promise<void>,
    loadFavorite: () => void,
    onActiveItemChange: (data: string) => void,
    activeItemId: number,
};

class SignInPage extends React.PureComponent<Props, null> {
  private email: React.RefObject<HTMLInputElement>;
  private password: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.email = React.createRef();
    this.password = React.createRef();

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
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required={true} ref={this.email}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required={true} ref={this.password}/>
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

const mapDispatchToProps = (dispatch) => ({
  onUserLogin: (authInfo) => {
    return dispatch(Operation.loginUser(authInfo));
  },
  loadFavorite: () => {
    dispatch(DataOperation.loadFavorite());
  }
});

export {SignInPage};
export default connect(null, mapDispatchToProps)(SignInPage);
