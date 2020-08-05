import * as React from "react";
import * as renderer from "react-test-renderer";

import {noop} from "../../utils";
import SignInForm from "./sign-in-form";

it(`Render SignInForm`, () => {
  const tree = renderer
    .create(
        <SignInForm
          onSubmit={noop}
          errorText={``}
          emailRef={null}
          passwordRef={null}
        />,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
