import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Render Main`, () => {
  const tree = renderer
    .create(
        <Main
          rentsCount = {312}
          cardsNames = {[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`]}
          onPlaceCardHeaderClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
