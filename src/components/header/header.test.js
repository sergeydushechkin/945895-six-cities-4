import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

import NameSpace from "../../reducer/name-space.js";

import Header from "./header.jsx";

const mockStore = configureStore([]);

it(`Render Header`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authInfo: {
        avatarUrl: ``,
        email: ``,
        id: null,
        isPro: null,
        name: ``,
      }
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Header
            isLogoActive={false}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
