import React from "react";
import renderer from "react-test-renderer";
import {SignIn} from "./sign-in.jsx";

it(`Render Header`, () => {
  const tree = renderer
    .create(
        <SignIn
          onUserLogin={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
