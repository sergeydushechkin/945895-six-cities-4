import * as React from "react";

interface Props {
  onSubmit: (evt: React.SyntheticEvent) => void;
  errorText: string | number;
  emailRef: React.RefObject<HTMLInputElement>;
  passwordRef: React.RefObject<HTMLInputElement>;
}

const SignInForm: React.FunctionComponent<Props> = (props: Props) => {
  const {onSubmit, errorText, emailRef, passwordRef} = props;
  return (
    <form onSubmit={onSubmit} className="login__form form" action="#" method="post">
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" required={true} ref={emailRef}/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" required={true} ref={passwordRef}/>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
      {errorText &&
        <div style={{marginTop: `15px`, fontSize: `15px`, color: `#ff0000`}}>{errorText}</div>
      }
    </form>
  );
};

export default SignInForm;

