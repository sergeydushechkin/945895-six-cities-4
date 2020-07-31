import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import history from "../../history.js";
import {CardType} from "../../const.js";
import {Card} from "./card.jsx";

import offers from "../../mocks/tests-offers.js";


it(`Render Card`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Card
            key={offers[0].id}
            offer={offers[0]}
            onActiveItemChange={() => {}}
            onFavoritesToggle={() => {}}
            cardType={CardType.MAIN}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
