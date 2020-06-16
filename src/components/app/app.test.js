import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const placeCardHeaderHandler = () => {};

it(`Render App`, () => {
  const tree = renderer
    .create(
        <App
          rentsCount = {312}
          cardsNames = {[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`]}
          onPlaceCardHeaderClick = {placeCardHeaderHandler}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});