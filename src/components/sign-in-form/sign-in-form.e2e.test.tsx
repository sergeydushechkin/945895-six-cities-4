import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";

import {noop} from "../../utils";
import testStore from "../../mocks/tests-mock-store";
import SignInForm from "./sign-in-form";

configure({
  adapter: new Adapter(),
});

it(`Test SignInForm component items clicks and return value`, () => {
  const onUserLogin = jest.fn();

  const SignInFormWrap = shallow(
      <SignInForm
        onSubmit={onUserLogin}
        errorText={``}
        emailRef={null}
        passwordRef={null}
      />,
      {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  );

  const pageForm = SignInFormWrap.find(`.form`);

  pageForm.simulate(`submit`, {
    preventDefault: noop
  });

  expect(onUserLogin).toHaveBeenCalledTimes(1);
});
