import React from "react";
import renderer from "react-test-renderer";
import HeaderNav from "./header-nav.jsx";

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
        <HeaderNav
          authStatus={`AUTH`}
          authInfo={AuthInfo}
          onChangeAuthPageState={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
