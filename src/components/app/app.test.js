import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

import offers from "../../mocks/tests_offers.js";
import users from "../../mocks/tests_users.js";

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          rentsCount = {312}
          offers = {offers}
          users = {users}
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
