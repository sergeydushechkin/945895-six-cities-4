import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import history from "../../history";
import {CardType} from "../../types";
import {noop} from "../../utils";
import {Card} from "./card";

import offers from "../../mocks/tests-offers";


it(`Render Card`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Card
            key={offers[0].id}
            offer={offers[0]}
            onActiveItemChange={noop}
            onFavoritesToggle={noop}
            cardType={CardType.MAIN}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
