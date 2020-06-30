import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

import offers from "../../mocks/tests_offers.js";

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Main
          city={`Amsterdam`}
          offers = {offers}
          activeOffers = {offers}
          onPlaceCardHeaderClick = {() => {}}
          onLocationButtonClick = {() => {}}
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
