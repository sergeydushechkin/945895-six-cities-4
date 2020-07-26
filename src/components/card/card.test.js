import React from "react";
import renderer from "react-test-renderer";
import {CardType} from "../../const.js";
import {Card} from "./card.jsx";

import offers from "../../mocks/tests-offers.js";

it(`Render Card`, () => {
  const tree = renderer
    .create(
        <Card
          key={offers[0].id}
          offer={offers[0]}
          onActiveItemChange={() => {}}
          onFavoritesToggle={() => {}}
          cardType={CardType.MAIN}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
