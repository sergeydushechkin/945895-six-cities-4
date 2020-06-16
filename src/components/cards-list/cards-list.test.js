import React from "react";
import renderer from "react-test-renderer";
import CardsList from "./cards-list.jsx";

it(`Render CardsList`, () => {
  const tree = renderer
    .create(
        <CardsList
          cardsNames={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`, `Canal View Prinsengracht`]}
          onPlaceCardHeaderClick = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
