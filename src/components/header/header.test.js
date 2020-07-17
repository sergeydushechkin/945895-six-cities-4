import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header.jsx";

const AuthInfo = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

it(`Render Header`, () => {
  const tree = renderer
    .create(
        <Header
          isLogoActive={false}
          authStatus={`AUTH`}
          authInfo={AuthInfo}
          onChangeAuthPageState={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
