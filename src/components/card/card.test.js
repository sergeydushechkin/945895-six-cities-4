import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

it(`Render Card`, () => {
  const tree = renderer
    .create(
        <Card
          cardName={`Beautiful & luxurious apartment at great location`}
          onPlaceCardHeaderClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
